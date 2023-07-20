// work from bottom to top
// execute Action of the type "transform" using a descriptor (des_1)
// our transform props are collected by a reference (ref_1)
// the offset prop needs to use a Descriptor (des_2)
// the target prop needs to point to a layer via a reference (ref_2)


var desc1 = new ActionDescriptor(); 
var ref1 = new ActionReference();         
ref1.putEnumerated(     stringIDToTypeID( "layer" ), 
                        stringIDToTypeID( "ordinal" ), 
                        stringIDToTypeID( "targetEnum" ) );     
desc1.putReference(     stringIDToTypeID( "null " ), ref1 );     
desc1.putEnumerated(    stringIDToTypeID( "freeTransformCenterState" ), 
                        stringIDToTypeID( "quadCenterState" ), 
                        stringIDToTypeID( "QCSAverage" ) ); 
var desc2 = new ActionDescriptor();        
desc2.putUnitDouble(    stringIDToTypeID( "horizontal" ), 
                        stringIDToTypeID( "pixelsUnit" ), 
                        58.500000 ); 
desc2.putUnitDouble(    stringIDToTypeID( "vertical" ), 
                        stringIDToTypeID( "pixelsUnit" ), 
                        31.500000 ); 
desc1.putObject(        stringIDToTypeID( "offset " ), 
                        stringIDToTypeID( "offset" ), 
                        desc2 ); 
desc1.putUnitDouble(    stringIDToTypeID( "width" ), 
                        stringIDToTypeID( "percentUnit" ), 
                        139.000000 ); 
desc1.putUnitDouble(    stringIDToTypeID( "height" ), 
                        stringIDToTypeID("percentUnit" ), 
                        152.500000 ); 
desc1.putEnumerated(    stringIDToTypeID( "interfaceIconFrameDimmed" ), 
                        stringIDToTypeID( "interpolationType" ), 
                        stringIDToTypeID( "bicubic" ) ); 
executeAction( stringIDToTypeID( "transform" ), desc1, DialogModes.NO);