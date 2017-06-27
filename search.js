
function getPageNumber(){

  var kanjiList = document.getElementById("search-box").value;
  if(kanjiList == null){
    document.getElementById("results").innerHTML = "got NULL :/ <br> Enter a kanji baka yaro >_<";  
  }  

document.getElementById("results").innerHTML = "";
  
  for (var i = 0; i < kanjiList.length; i++ ){
    var kanji = kanjiList [i];
    document.getElementById("results").innerHTML += kanji + "<br>";
    for(var prop in database){
      if(prop == kanji){
        document.getElementById("results").innerHTML += "page" + " : " + database[prop]["page"] + "<br>"
          + "id" + " : " + database[prop]["id"] + "<br>"
          + "meaning" + " : " + database[prop]["meaning"] + "<br><br>";
      }
    }
  }
}
