// SetPaintBrush Script 2016 Tom Ruark and others like Mike Hale (RIP) cut and paste  by JJMack
// Set the options for the paint brush tool like on the tool option bar
// Round Brush Tip Features Diameter,Hardness,Angle,Roundness,Spacing,Flipy,Flipx
// blend modes, opacity, flow and pressure control
// Note: can also retrieve round brush tip features
// So if you retrieve the current brush tip features
// you can select Brush Presets to toggle while brush dynamic setting 
// and the restore the tip features so presets does not size shape hardness etc

if (documents.length == 0) {
    var d = documents.add();
} else {
    var d = activeDocument;
}

// At least two layers so behind and clear are available
if (d.layers.length == 1) { d.artLayers.add(); }
setTool('paintbrushTool');

// blend modes for paint brush 

var bmsS = ["normal", "dissolve", "behind", "clearEnum",
            "darken", "multiply", "colorBurn", "linearBurn", "darkerColor",
            "lighten", "screen", "colorDodge", "linearDodge", "lighterColor",
            "overlay", "softLight", "hardLight", "vividLight", "linearLight", "pinLight", "hardMix",
            "difference", "exclusion", "blendSubtraction", "blendDivide",
            "hue", "saturation", "color", "luminosity",  ]; 
try {

    /* parameters (Diameter,Hardness,Angle,Roundness,Spacing,Flipy,Flipx) all are required
    Diameter  range 1 to 5000
    Hardness  range 0 to 100
    Angle     range 0 to + or - 180
    Roundness range 1 to 100
    Spacing   range 1 to 1000
    Flipy     range 0 or 1 false or true 
    Flipx     range 0 or 1 false or true
  */

  setBrushFeatures(13,0,0,100,25,0,0);       //Adobe Defaults 

  // parameters (mode character string, opacity %, flow %, penopacity boolean, pensize boolean, penair boolean) all are required

  SetPaintBrush(bmsS[0],100,100,0,0,0);     // Adobe Defaults

  /* Toggle Brtsh dynamivcs with  ON  and OFF  brtsh presets this is commented out the Preset need to be made

  var PresetName1 = "Brush Dynamics ON";    // Name of tool preset
  var PresetName2 = "Brush Dynamics OFF";   // Name of tool preset
  var PT = $.getenv("PanelDynamics");
  var saveFeatures = getBrushFeatures();

  // CHECK TOOL PRESET Dynamics STATE
  if(PT == null || PT == "OFF") {
    $.setenv("PanelDynamics","ON");
    SelectToolPreset(PresetName2);
  }

  else{

  $.setenv("PanelDynamics","OFF");
  SelectToolPreset(PresetName1);

  }

  setBrushFeatures(saveFeatures[0],saveFeatures[1],saveFeatures[2],saveFeatures[3],saveFeatures[4],saveFeatures[5],saveFeatures[6]);

  */

}

catch(e){

  //Something went wrong

  alert(e + ': on line ' + e.line, 'Script Error', true);

  //alert ("An unexpected error occurred and the script did not complete!");

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//==============================================================================================//

function setTool(tool) {

  var desc9 = new ActionDescriptor();
  var ref7 = new ActionReference();
  ref7.putClass( app.stringIDToTypeID(tool) );
  desc9.putReference( app.charIDToTypeID('null'), ref7 );
  executeAction( app.charIDToTypeID('slct'), desc9, DialogModes.NO );

}

function getBrushFeatures (){

  //A Brush tool must be the current tool

    if (!app.toolSupportsBrushes(app.currentTool)) selectBrush();  //CC 2014

    var ref = new ActionReference();  
    ref.putEnumerated( charIDToTypeID("capp"), charIDToTypeID("Ordn"), charIDToTypeID("Trgt") );  
    var appDesc = executeActionGet(ref);  
    var toolDesc = appDesc.getObjectValue(stringIDToTypeID('currentToolOptions'));  
    var brushDesc = toolDesc.getObjectValue(stringIDToTypeID('brush'));
    var currDiameter = brushDesc.getDouble(stringIDToTypeID('diameter'));  
    var currHardness = brushDesc.getDouble(stringIDToTypeID('hardness'));  
    var currAngle = brushDesc.getDouble(stringIDToTypeID('angle'));  
    var currRoundness = brushDesc.getDouble(stringIDToTypeID('roundness'));  
    var currSpacing = brushDesc.getDouble(stringIDToTypeID('spacing'));  
    var currFlipy = brushDesc.getBoolean(stringIDToTypeID('flipY'));  
    var currFlipx = brushDesc.getBoolean(stringIDToTypeID('flipX'));
  var currentFeatures = new Array( currDiameter, currHardness, currAngle, currRoundness, currSpacing, currFlipy, currFlipx );

    return currentFeatures

}

function setBrushFeatures (Diameter,Hardness,Angle,Roundness,Spacing,Flipy,Flipx) {  

    var desc = new ActionDescriptor();  
    var ref = new ActionReference();  
    ref.putEnumerated( charIDToTypeID( "Brsh" ), charIDToTypeID( "Ordn" ), charIDToTypeID( "Trgt" ) );  
    desc.putReference( charIDToTypeID( "null" ), ref );  
    var desc1 = new ActionDescriptor();  
    desc1.putDouble(stringIDToTypeID('diameter'), Diameter);  
    desc1.putDouble(stringIDToTypeID('hardness'), Hardness);  
    desc1.putDouble(stringIDToTypeID('angle'), Angle);  
    desc1.putDouble(stringIDToTypeID('roundness'), Roundness);  
    desc1.putUnitDouble( stringIDToTypeID('spacing'), charIDToTypeID('#Prc'), Spacing);  
    desc1.putBoolean(stringIDToTypeID('flipY'), Flipy);  
    desc1.putBoolean(stringIDToTypeID('flipX'), Flipx);  
    desc.putObject( stringIDToTypeID('to'), charIDToTypeID( "Brsh" ), desc1 );  
    executeAction( charIDToTypeID( "setd" ), desc, DialogModes.NO );  

}

function SetPaintBrush(mode,opacity,flow,penopacity,pensize,penair) {

  var idset = stringIDToTypeID( "set" );
  var desc226 = new ActionDescriptor();
  var idnull = stringIDToTypeID( "null" );
  var ref170 = new ActionReference();
    var idPbTl = stringIDToTypeID( "paintbrushTool" );
    ref170.putClass( idPbTl );
    desc226.putReference( idnull, ref170 );
    var id12 = stringIDToTypeID( "to" );
    var desc5 = new ActionDescriptor();

    // opacity
    var id13 = stringIDToTypeID( "opacity" );
    var id14 = stringIDToTypeID( "percentUnit" );
  desc5.putUnitDouble( id13, id14, opacity );

    // blend mode
    var id15 = stringIDToTypeID( "mode" );
    var id16 = stringIDToTypeID( "blendModel" );
  var id17 = stringIDToTypeID( mode );
    desc5.putEnumerated( id15, id16, id17 );

    // flow
    var id19 = stringIDToTypeID( "flow" );
  desc5.putUnitDouble( id19, id14, flow );

    // pressure for opacity
    desc5.putBoolean( stringIDToTypeID( "usePressureOverridesOpacity" ), penopacity );

    // pressure for size
    desc5.putBoolean( stringIDToTypeID( "usePressureOverridesSize" ), pensize );

    // enable air brush
    desc5.putBoolean( stringIDToTypeID( "repeat" ), penair );
    var id18 = stringIDToTypeID( "null" );
    desc226.putObject( id12, id18, desc5 );
  executeAction( idset, desc226, DialogModes.NO );

  }

function SelectToolPreset(PresetName) {

  var idslct = charIDToTypeID( "slct" );
  var desc14 = new ActionDescriptor();
  var idnull = charIDToTypeID( "null" );
  var ref10 = new ActionReference();
  var idtoolPreset = stringIDToTypeID( "toolPreset" );
  ref10.putName( idtoolPreset, PresetName);
  desc14.putReference( idnull, ref10 );
  executeAction( idslct, desc14, DialogModes.NO );

  }


  // << above cleaned up and refactored >> // 

  function setTool(tool) {
    var setTool = new ActionDescriptor();
    var toolObject = new ActionReference();
    toolObject.putClass(app.strCmd(tool));
    setTool.putReference(app.charCmd('null'), toolObject);
    executeAction(app.charCmd('slct'), setTool, DialogModes.NO);
};

var defaultPencil = {
    "diameter" : 1, // range 1 to 5000
    "hardness" : 100, // range 0 to 100
    "angle"  : 0, // range 0 to + or - 180
    "roundness" : 1, // range 1 to 100
    "spacing" : 1, // range 1 to 1000
    "flipX": false, // range 0 or 1 false or true 
    "flipY" : false, // range 0 or 1 false or true
};

function setBrushFeatures(settings) {  

    var desc = new ActionDescriptor();  
    var ref = new ActionReference();  
    ref.putEnumerated(charCmd("Brsh"), charCmd("Ordn"), charCmd("Trgt"));  
    desc.putReference(charCmd("null"), ref);  
    var desc1 = new ActionDescriptor();  
    desc1.putDouble(strCmd('diameter'), settings.diameter);  
    desc1.putDouble(strCmd('hardness'), settings.hardness);  
    desc1.putDouble(strCmd('angle'), settings.angle);  
    desc1.putDouble(strCmd('roundness'), settings.roundness);  
    desc1.putUnitDouble(strCmd('spacing'), charCmd('#Prc'), settings.spacing);  
    desc1.putBoolean(strCmd('flipX'), settings.flipX);  
    desc1.putBoolean(strCmd('flipY'), settings.flipY);  
    desc.putObject(strCmd('to'), charCmd("Brsh"), desc1);  
    executeAction(charCmd("setd"), desc, DialogModes.NO);  
};

var defaultPaintBrush = {
    "mode" : "normal",
    "opacity" : 100,
    "flow" : 100,
    "penOpacity" : false, // use pressure
    "penSize" : false, // use pressure
    "penAir" : false, // use pressure
};

function setPaintBrush(settings) {

    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putClass(strCmd("paintbrushTool"));
    desc1.putReference(strCmd("null"), ref1);
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(strCmd("opacity"), strCmd("percentUnit"), settings.opacity);
    desc2.putEnumerated(strCmd("mode"), strCmd("blendModel"), strCmd( settings.mode));
    desc2.putUnitDouble(strCmd("flow"), strCmd("percentUnit"), settings.flow);
    desc2.putBoolean(strCmd("usePressureOverrundefined"), settings.penopacity);
    desc2.putBoolean(strCmd("usePressureOverrundefined"), settings.pensize);
    desc2.putBoolean(strCmd("repeat"), settings.penair);
    desc1.putObject(strCmd("to"), strCmd("null"), desc2);
    executeAction(strCmd("set"), desc1, DialogModes.NO);
};