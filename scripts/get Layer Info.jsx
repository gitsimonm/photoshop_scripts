/** 
* Obtain layer information according to the layer ID 
* @param layerID
 * @return {*}
 */ 
function  getLayerInfoByID ( layerID ) {
    var ref1 = new ActionReference();        
    ref1.putIdentifier(stringIDToTypeID( "layerID" , layerID )); 
    var layerDescriptor = executeActionGet(ref1); 
    var json = ADToJson(layerDescriptor);       
    return json
}
    
/** 
* Obtain layer information according to the order of layers 
* @param index
 * @return {*}
 */ 
function  getLayerInfoByIndex ( index ) {
    var ref1 = new ActionReference();         
    ref1.putIndex( stringIDToTypeID( "itemIndex" ), index);
    var layerDescriptor = executeActionGet(ref1); 
    var json = ADToJson(layerDescriptor); 
    return json
}
    

    
var ref1 = new ActionReference(); // Its meaning is layer -> ordinal -> target, which is the currently selected layer  
    ref1.putEnumerated(     charIDToTypeID( "Lyr " ), 
                            charIDToTypeID( "Ordn" ), 
                            charIDToTypeID( " Trgt" )); 
var layerDescriptor = executeActionGet(ref1);
    

var ref1 = new ActionReference(); 
// These keys: Dcmn, Ordn, Trgt, you can just memorize them 
// If you are not used to it, you can also change it to a string expression document, ordinal, target     
ref1.putEnumerated(charIDToTypeID( 'Dcmn' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var docDescriptor = executeActionGet(ref1); 
var json = ADToJson(docDescriptor); 
$.writeln(json.title);
    

    




    


