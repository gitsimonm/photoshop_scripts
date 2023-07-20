  // smart object from layers
  var charCmd = function(command) {return app.charIDToTypeID(command)};
  var strCmd = function(command) {return app.stringIDToTypeID(command)};

  var layerNames = ["a", "b", "c", "d"];
  for (var i = 0; i < layerNames.length; i++) {
      var r = new ActionReference();
      alert(layerNames[i]);
      r.putName(strCmd("layer"), layerNames[i]);
      var d = new ActionDescriptor();
      d.putReference(charCmd("null"), r);
      d.putEnumerated(strCmd("selectionModifier"), strCmd("selectionModifierType"), strCmd("addToSelection"));
      executeAction(strCmd("select"), d, DialogModes.NO);
  }
