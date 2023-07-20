// get the units you have set in the program
	var startRulerUnits = app.preferences.rulerUnits
    var startTypeUnits = app.preferences.typeUnits

	// set our own units of measure
    app.preferences.rulerUnits = Units.PIXELS
    app.preferences.typeUnits = TypeUnits.PIXELS

	// create a new document
    var docRef = app.documents.add(2000, 2000);

	// call the polygon drawing function
	// parameters: x:1000px, y:1000px, radius:200px, number of sides:3, angle of rotation relative to the origin:50 degrees
    regularpolygon(1000, 1000, 200, 3, 50)

	// after the script is executed the original units are back
    app.preferences.rulerUnits = startRulerUnits
    app.preferences.typeUnits = startTypeUnits

    function regularpolygon(x, y, radius, sides, rotation) {
        var shapeArr = new Array();//creation of an array for the vertex coordinates
        if (sides < 3) return; // if the vertices are less than three, then exit the function
        var angleBetweenPoint = ((Math.PI * 2) / sides);// angle between the tops
        var angleShift = degToRad(rotation); // angle of shift (rotation of the figure)
        for (var i = 0; i < sides; i++) {
            var actAng = (angleBetweenPoint * i) + angleShift; // the real angle consists of the real angle + offset
            if (actAng >= (2 * Math.PI)) {
				actAng = actAng - (2 * Math.PI); // check the angle if it is more than 360 degrees
            }
            shapeArr[i] = [x + radius * (Math.cos(actAng)), y + radius * (Math.sin(actAng))]; // put x,y coordinates into array
        }
        docRef.selection.select(shapeArr); // add the selection
        app.activeDocument.selection.fill(app.foregroundColor, ColorBlendMode.NORMAL, 100, false); // fill selection
        docRef.selection.deselect(); deselecting
    }

	//converting degrees into radians
    function degToRad(deg) {
        return (deg * (Math.PI / 180));
    }

    