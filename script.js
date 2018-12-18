//oefening 1
let changecolor = function (event) {
    let div = document.getElementById("character");
    switch(parseInt(event.key)) {
    case 0:
       div.style.backgroundColor = "#378532";
        break;
    case 1:
        div.style.backgroundColor = "#fe404f";
        break;
    case 2:
        div.style.backgroundColor = "#F1F50A";
        break;
    case 3:
        div.style.backgroundColor = "#0AF5F5";
        break;
    case 4:
        div.style.backgroundColor = "#000000";
        break;
    case 5:
        div.style.backgroundColor = "#F50AEA";
        break;
    case 6:
        div.style.backgroundColor = "#7B5004";
        break;
    case 7:
        div.style.backgroundColor = "#457B04";
        break;
    case 8:
        div.style.backgroundColor = "#047B60";
        break;
    case 9:
        div.style.backgroundColor = "#2A047B";
        break;
        
}
}

window.addEventListener ("keypress", changecolor);

//oefening 2
let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");

let addclass = function (event) {
switch(event.key) {
    case "ArrowLeft":
        left.classList.add("opac");
        break;
    case "ArrowUp":
        up.classList.add("opac");
        break;
    case "ArrowRight":
        right.classList.add("opac");
        break;
    case "ArrowDown":
        down.classList.add("opac");
        break;
}
}
let removeclass = function (event) {
switch(event.key) {
    case "ArrowLeft":
        left.classList.remove("opac");
        break;
    case "ArrowUp":
        up.classList.remove("opac");
        break;
    case "ArrowRight":
        right.classList.remove("opac");
        break;
    case "ArrowDown":
        down.classList.remove("opac");
        break;
}
}
window.addEventListener ("keydown", addclass);
window.addEventListener ("keyup", removeclass);





