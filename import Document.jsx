function  openDocument ( filePath ) {
    var desc7 = new ActionDescriptor();        
    desc7.putBoolean( stringIDToTypeID( "dontRecord" ), false );        
    desc7.putBoolean( stringIDToTypeID( "forceNotify" ), true );        
    desc7.putPath( stringIDToTypeID( "null " ), new File( filePath ) );        
    desc7.putInteger( stringIDToTypeID( "documentID" ), 224 );    
    executeAction( stringIDToTypeID( "open" ), desc7, DialogModes.NO );   
}
    