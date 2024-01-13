function WLoaderStart() {
    var div = document.createElement("div");
    div.className = "wloader-circle";
    
    var wcontainer = document.createElement("div");
    wcontainer.classList = "wloader-container";

    wcontainer.appendChild(div);

    document.body.appendChild(wcontainer);
}

function WLoaderStop() {
    $(".wloader-container").remove();
}