// From the amazing Chinese blog https://zhuanlan.zhihu.com/p/601014597 // 

/** 
* This function accepts an AD object and returns the JSON structure of all attribute values ​​of this object 
* @param desc [ActionDescriptor] 
* @return JSON
*/
 
function  ADToJson ( desc ) {
    var json = {}; 
    
    for ( var i = 0 ; i<desc.count; i++) {
        
        var typeID = desc.getKey(i);
        var stringID = typeIDToStringID(typeID);
        var typeString = (desc.getType(typeID)).toString(); 
         
        switch (typeString) { 
            case "DescValueType.BOOLEANTYPE" : 
                json[stringID] = desc.getBoolean(typeID);
            break ; 
            case "DescValueType.DOUBLETYPE" : 
                json[stringID] = desc.getDouble(typeID); 
            break ; 
            case "DescValueType.INTEGERTYPE" :    
                json[stringID] = desc.getInteger(typeID); 
            break ; 
            case "DescValueType.STRINGTYPE" :       
                json[stringID] = desc.getString(typeID); 
            break ; 
            case 'DescValueType.OBJECTTYPE' : 
                var objectValue = desc.getObjectValue(typeID);      
                json[stringID] = ADToJson(objectValue); 
            break ;
            case 'DescValueType.CLASSTYPE' :

            break;
            case 'DescValueType.LISTTYPE' : 
                var list = desc.getList(typeID);
                for (var j = 0; j < list.length; j++) {
                    json[stringID] = ADToJson(list[j]);
                }
            break;
            case 'DescValueType.REFERENCETYPE' : // The rest is left for you to complete 

            break ; 
            default : ;     
        }
    }
    return json
}
                         
var ref1 = new ActionReference(); 
ref1.putName( stringIDToTypeID( "layer" ), "Rectangle" ); // a layer named "Rectangle"
var layerDescriptor = executeActionGet(ref1); 
var json = ADToJson(layerDescriptor);
