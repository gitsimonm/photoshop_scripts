
// Create a textStyle AD and reassign it 
var textStyle = new ActionDescriptor(); 
    textStyle.putString(stringIDToTypeID( "fontName" ), "Consolas" );       // The font you want
    textStyle.putString(stringIDToTypeID( " fontStyleName" ), "Regular" ); 
    textStyle. putString(stringIDToTypeID( "fontPostScriptName" ), "Consolas" );

// Create an AD of textToolCharacterOptions and assign textStyle to it 
var textToolCharacterOptions = new ActionDescriptor(); 
    textToolCharacterOptions.putObject(stringIDToTypeID( "textStyle" ), stringIDToTypeID( "textStyle" ), textStyle);

// Create an AD of currentToolOptions and assign textToolCharacterOptions to it 
var currentToolOptions = new ActionDescriptor(); 
    currentToolOptions.putObject(stringIDToTypeID( "textToolCharacterOptions" ), stringIDToTypeID( "textToolCharacterOptions" ), textToolCharacterOptions);

// Assign currentToolOptions to the text tool 
var desc1 = new ActionDescriptor(); 
var ref1 = new ActionReference();         
ref1.putClass(stringIDToTypeID( 'typeCreateOrEditTool' ));     
// The target object of the text tool     
desc1.putReference( stringIDToTypeID( " null" ), ref1 );     
desc1.putObject( stringIDToTypeID( "to" ), stringIDToTypeID( "null" ), currentToolOptions); 
executeAction( stringIDToTypeID( "set" ), desc1, DialogModes.NO );
    
