function capitalizeNames(names) {
    for (let i = 0; i < names.length; i++) {
        if(names[0] === names[0].toUpperCase()) {
            return names.toLowercase();
        }else if (names[0] === names[0].toLowerCase()) {
            return names.toUpperCase();
        }
        
        
     }
}
