var content1 = document.getElementById("content-1");
var content2 = document.getElementById("content-2");
var content3 = document.getElementById("content-3");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function openCpp(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(130%)";
    content3.style.transform = "translateX(130%)";

    btn1.style.color = "rgb(255, 191, 71)";
    btn2.style.color = "black";
    btn3.style.color = "black";

    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
}
function openJava(){
    content1.style.transform = "translateX(130%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(130%)";

    btn2.style.color = "rgb(255, 191, 71)";
    btn1.style.color = "black";
    btn3.style.color = "black";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0.3s";
    content3.style.transitionDelay = "0s";
}
function openPy(){
    content1.style.transform = "translateX(130%)";
    content2.style.transform = "translateX(130%)";
    content3.style.transform = "translateX(0)";

    btn3.style.color = "rgb(255, 191, 71)";
    btn1.style.color = "black";
    btn2.style.color = "black";

    content1.style.transitionDelay = "0s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0.3s";
}