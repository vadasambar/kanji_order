
function getPageNumber(){

    var kanjiList = document.getElementById("search-box").value; // get user input
    if(kanjiList == null){ 
        document.getElementById("results").innerHTML = "got NULL :/ <br> Enter a kanji baka yaro >_<";  
    }  

    document.getElementById("results").innerHTML = ""; // clean all text of previous search
    
    if(!isNaN (parseInt(kanjiList))){
        searchByID(kanjiList);  // if input is number id
    }

    if(isLetter(kanjiList[0])){
        searchByMeaning(kanjiList); // if input is character
    }  
    else {
        searchByKanji(kanjiList); // if input is kanji
    }   

}

function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

function printResults (kanji){
    document.getElementById("results").innerHTML += kanji + "<br>" 
                                                  + "page" + " : " + database[kanji]["page"] + "<br>"
                                                  + "id" + " : " + database[kanji]["id"] + "<br>"
                                                  + "meaning" + " : " + database[kanji]["meaning"] + "<br><br>";  
}

function searchByID(kanjiList){
    var id = kanjiList; 
    for(var kanji in database){
        if(id == database[kanji]["id"]){
            printResults(kanji); 
        }
    }
}

function searchByKanji (kanjiList){
    for (var i = 0; i < kanjiList.length; i++){
        var kanji = kanjiList [i]; 
        for (var prop in database){
            if (prop == kanji){
                printResults (kanji); 
            }
        }
    }
}

function searchByMeaning(kanjiList){
    var name = kanjiList; 
    for(var kanji in database){
        var meaningList = database[kanji]["meaning"].split(/,/); // store multiple meanings in an array
        for(var index in meaningList){
            meaning = meaningList[index].trim(); // remove white spaces before and after meaning
            if(name.toUpperCase() == meaning){
                printResults(kanji);
            }
        }
    }
}


