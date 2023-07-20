var ref1 = new ActionReference(); 
    ref1.putEnumerated(charIDToTypeID( 'Dcmn' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var docDescriptor = executeActionGet(ref1); 
// We can find targetLayersIDs by printing It is a list type, get an array through getList 
var list = docDescriptor.getList(stringIDToTypeID( "targetLayersIDs" )); 
// Traverse this list, get the layer ID, the data structure of ActionList is similar to AD, the array inside Elements are ActionReference objects 
for ( let i= 0 ; i<list.count; i++) { 
    var ar = list.getReference(i); 
    var layerId = ar.getIdentifier();
    $.writeln(layerId); 
} 
// After getting these layer IDs, you can get the information of each layer through the above getLayerInfoByID


// get the IDs of current selected layers
var ref1 = new ActionReference(); 
// Set a property for AR, indicating that you and I only need to get the value of the targetLayersIDs property, and don’t return the others    
ref1.putProperty(charIDToTypeID( "Prpr" ), stringIDToTypeID( "targetLayersIDs" ) );
// ^^ we add "Property" here to narrow DOM search, ie. narrow the reference to just a single property
ref1.putEnumerated(charIDToTypeID( 'Dcmn' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var docDescriptor = executeActionGet(ref1); 
var list = docDescriptor.getList(stringIDToTypeID( "targetLayersIDs" )) ;
    

// get the layer with ID 3
var ref1 = new ActionReference(); // Just name     
ref1.putProperty(charIDToTypeID( "Prpr" ), stringIDToTypeID( "layer" ));     
ref1.putIdentifier(stringIDToTypeID( "layerID" , 3 )); 
var layerDescriptor = executeActionGet( ref1);
    
// get the currently selected tool
var ref1 = new ActionReference(); 
    ref1.putProperty(stringIDToTypeID( 'property' ), stringIDToTypeID( "tool" )); 
    ref1.putEnumerated(stringIDToTypeID( 'application' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var desc1 = executeActionGet(ref1); 
// ...

// get the current style of text tool, ie. the currently selected tool
var ref1 = new ActionReference(); 
    ref1.putProperty(stringIDToTypeID( 'property' ), stringIDToTypeID( "tool" )); 
    ref1.putEnumerated(stringIDToTypeID( 'application' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var desc1 = executeActionGet(ref1); 
// Get the option descriptor of the current tool 
var desc2 = desc1.getObjectValue(stringIDToTypeID( 'currentToolOptions' )); 
// Get the text font configuration item 
var textTool = desc2.getObjectValue (stringIDToTypeID( "textToolCharacterOptions" )); 
// Get the text style 
varstyle = textTool.getObjectValue(stringIDToTypeID( "textStyle" )); 
// There are fonts, colors, sizes and other information in the text style 
var fontName = style.getString(stringIDToTypeID( "fontName" )); 
// ...