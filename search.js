

var kanji = document.getElementById("search-box").value;
alert("This is the kanji: " + kanji);

document.getElementById("results").innerHTML = "IT IS WORKING"; 
for(var prop in database){
  if(prop == kanji){
    alert("KANJI FOUND");
    document.getElementById("results").innerHTML = prop + " : " + database[prop]["page"] + "<br>"; 
  }
}
