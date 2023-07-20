var ref1 = new ActionReference(); 
ref1.putEnumerated(stringIDToTypeID( 'application' ), charIDToTypeID( 'Ordn' ), charIDToTypeID( 'Trgt' )); 
var appDesc ​​= executeActionGet(ref1); 
var currentToolOptions = appDesc.getObjectValue(stringIDToTypeID ( "currentToolOptions" )); 
var textTool = currentToolOptions.getObjectValue(stringIDToTypeID( "textToolCharacterOptions" )); 
var style = textTool.getObjectValue(stringIDToTypeID( "textStyle" )) 
var fontName = style.getString(stringIDToTypeID( "fontName" ));
var fontStyleName = style.getString(stringIDToTypeID( "fontStyleName" )); 
var fontPostScriptName = style.getString(stringIDToTypeID( "fontPostScriptName" )); 
$.writeln(fontName + " - " + fontStyleName + " - " + fontPostScriptName);





