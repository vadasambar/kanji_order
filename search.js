
function getPageNumber(){

    var kanji = document.getElementById("search-box").value;
    if(kanji == null){
        document.getElementById("results").innerHTML = "NULL";  
    }
    
    
    document.getElementById("results").innerHTML = kanji + "<br>";
    for(var prop in database){
        if(prop == kanji){
            document.getElementById("results").innerHTML += "page" + " : " + database[prop]["page"] + "<br>"
                                                          + "id" + " : " + database[prop]["id"] + "<br>"
            + "meaning" + " : " + database[prop]["meaning"] + "<br>";
        }
    }
}
