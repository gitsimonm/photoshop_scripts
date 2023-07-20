var desc1 = new ActionDescriptor(); 
var ref1 = new ActionReference(); 
    ref1.putName(stringIDToTypeID( "layer" ), "Camera" );  
// Change the target reference object to the layer desc1 whose layer name is Camera. 
    desc1.putReference( stringIDToTypeID( "null" ), ref1 ); 
var desc2 = new ActionDescriptor();     
desc2.putString( stringIDToTypeID( "name" ), "abc" ); 
desc1.putObject( stringIDToTypeID( "to" ), stringIDToTypeID( " layer" ), desc2 );
executeAction( stringIDToTypeID( "set"), desc1, DialogModes.NO );