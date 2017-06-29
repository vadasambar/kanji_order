function focusSearchBox(e){
    document.getElementById("search-box").value = "";
    window.scrollTo(0, 0);
    document.getElementById("search-box").focus();
}

shortcut.add("Ctrl+s", focusSearchBox, {
    'type' : 'keydown',
    'target' : document
});

