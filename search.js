
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
    else{
        searchByKanji(kanjiList); // if input is kanji
    }   

}

function isLetter(c){
    return c.toLowerCase() != c.toUpperCase();
}

function printResults(kanji){
    if(!database[kanji]){
        return;
    }
    document.getElementById("results").innerHTML += kanji + "<br>" 
                                                  + "page" + " : " + database[kanji]["page"] + "<br>"
                                                  + "id" + " : " + database[kanji]["id"] + "<br>"
                                                  + "meaning" + " : " + database[kanji]["meaning"] + "<br><br>";  
}

function searchByID(kanjiList){
    var desiredKanjiIDs = kanjiList.split(" ");
    desiredKanjiIDs.sort(compareIDs);
    var largest = desiredKanjiIDs[desiredKanjiIDs.length-1];
    var database_i = 1;
    var arr_i = 0;
    for(var kanji in database){
        if(database_i == desiredKanjiIDs[arr_i]){
            printResults(kanji);
            arr_i++;
        }
        if(database_i>2300 || database_i>largest){
            return;
        }
        database_i++;
    }
}

function compareIDs(a, b){
    return a - b;
}

function searchByKanji(kanjiList){
    for (var i = 0; i < kanjiList.length; i++){
        var kanji = kanjiList[i]; 
        printResults(kanji);
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


