var mouseEvent = " ";
var currentX = 0;
var currentY = 0;
var lastX = 0;
var lastY = 0;
var current_touchX = 0;
var current_touchY = 0;
var last_touchX = 0;
var last_touchY = 0;

canvas = document.getElementById("touch_canvas");
ctx = canvas.getContext("2d");

var color = " ";
var width = " ";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("cinput");
    width = document.getElementById("winput");

    mouseEvent == "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {
    mouseEvent == "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
    mouseEvent == "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentX = e.clientX - offsetLeft;
    currentY = e.clientY - offsetTop;

    if (mouseEvent == "mousemove") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }

    lastX = currentX;
    lastY = currentY;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    current_touchX = e.touches[0].clientX - canvas.offsetLeft;
    current_touchY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_touchX = e.touches[0].clientX - canvas.offsetLeft;
    current_touchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(last_touchX, last_touchY);
    ctx.lineTo(current_touchX, current_touchY);
    ctx.stroke();

    last_touchX = current_touchX;
    last_touchY = current_touchY;
}