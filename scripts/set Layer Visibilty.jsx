// code sample 1 
var desc1 = new ActionDescriptor(); 

var list1 = new ActionList(); 
var ref1 = new ActionReference(); 
ref1.putIdentifier(charIDToTypeID( "Lyr " ), this.id, ref1); 
desc1.putList(charIDToTypeID( "null" ), list1); 
executeAction(charIDToTypeID( "Shw " ), desc1, DialogModes.NO);