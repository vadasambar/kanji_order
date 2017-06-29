function focusSearchBox(e){
    document.getElementById("search-box").value = "";
    document.getElementById("search-box").focus();
}

shortcut.add("Ctrl+s", focusSearchBox, {
    'type' : 'keydown',
    'target' : document
});

