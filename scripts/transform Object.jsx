var idtransform = stringIDToTypeID( "transform" ); 
var desc31 = new ActionDescriptor(); 
var idnull = stringIDToTypeID( "null" ); 
var ref11 = new ActionReference(); 
var idlayer = stringIDToTypeID( " layer" ) ;
var idordinal = stringIDToTypeID( "ordinal" ); 
var idtargetEnum = stringIDToTypeID( "targetEnum" );  
ref11.putEnumerated( idlayer, idordinal, idtargetEnum );   
desc31.putReference( idnull, ref11 ); 
var idfreeTransformCenterState = stringIDToTypeID( "freeTransformCenterState" );
var idquadCenterState = stringIDToTypeID( "quadCenterState" );
var idQCSAverage = stringIDToTypeID( "QCSAverage" );   
desc31.putEnumerated( idfreeTransformCenterState, idquadCenterState, idQCSAverage ) ; 
var idoffset = stringIDToTypeID( "offset" ); 
var desc32 = new ActionDescriptor(); 
var idhorizontal = stringIDToTypeID( "horizontal" ); 
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );
desc32.putUnitDouble( idhorizontal, idpixelsUnit, 58.500000 ); 
var idvertical = stringIDToTypeID( "vertical" ); 
var idpixelsUnit = stringIDToTypeID( "pixelsUnit" );        
desc32.putUnitDouble( idvertical, idpixelsUnit, 31.500000 ); 
var idoffset = stringIDToTypeID( "offset" );    
desc31.putObject( idoffset, idoffset, desc32 );
var idwidth = stringIDToTypeID( "width" ); 
var idpercentUnit = stringIDToTypeID( "percentUnit" );    
desc31.putUnitDouble( idwidth, idpercentUnit, 139.000000 ); 
var idheight = stringIDToTypeID( "height" ); 
var idpercentUnit = stringIDToTypeID( "percentUnit" );    
desc31.putUnitDouble( idheight, idpercentUnit, 152.500000 );
var idinterfaceIconFrameDimmed = stringIDToTypeID( "inter faceIconFrameDimmed" );
var idinterpolationType = stringIDToTypeID( " interpolationType" ); 
var idbicubic = stringIDToTypeID( "bicubic" );   
desc31.putEnumerated( idinterfaceIconFrameDimmed, idinterpolationType, idbicubic );
executeAction( idtransform, desc31,DialogModes. NO );
    
    

    
    
    

