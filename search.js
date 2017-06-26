
function getPageNumber(){

var kanji = document.getElementById("search-box").value;
alert(typeof(kanji));
if(kanji == null){
 document.getElementById("results").innerHTML = "NULL";  
}

document.getElementById("results").innerHTML = "IT IS WORKING"; 
for(var prop in database){
  if(prop == kanji){
    alert("KANJI FOUND");
    document.getElementById("results").innerHTML = prop + " : " + database[prop]["page"] + "<br>"; 
  }
}
}
