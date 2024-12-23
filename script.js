var paragraph = document.getElementById("colorChangeParagraph");
function changeColor(color) {
  paragraph.style.backgroundColor = color;
}
function onMouseOver() {
  paragraph.style.backgroundColor = 'green';
}
function onMouseOut() {
  paragraph.style.backgroundColor = 'red';
}
paragraph.onmouseover = onMouseOver;
paragraph.onmouseout = onMouseOut;



