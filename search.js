
function getPageNumber(){

    var kanji = document.getElementById("search-box").value;
    if(kanji == null){
        document.getElementById("results").innerHTML = "NULL";  
    }

    for(var prop in database){
        if(prop == kanji){
            document.getElementById("results").innerHTML = prop + " : " + database[prop]["page"] + "<br>"; 
        }
    }
}
