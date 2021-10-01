var button1 = document.getElementById("button-free");
var button1Extend = document.querySelector("#button-free > div:nth-child(1)");
var button2 = document.getElementById("button-standard");
var button2Extend = document.querySelector("#button-standard > div:nth-child(1)");
var button3 = document.getElementById("button-premium");
var button3Extend = document.querySelector("#button-premium > div:nth-child(1)");

var buttonArray = [button1, button2, button3];
var buttonExtendArray = [button1Extend, button2Extend, button3Extend];


button1.addEventListener("mouseover", function() {
    button1Extend.style.width = "108%";
    button1Extend.style.transition = "0.5s"
});
button1.addEventListener("mouseleave", function() {
    button1Extend.style.width = "80%";
    button1Extend.style.transition = "0.5s"
});

button2.addEventListener("mouseover", function() {
    button2Extend.style.width = "108%";
    button2Extend.style.transition = "0.5s"
});
button2.addEventListener("mouseleave", function() {
    button2Extend.style.width = "80%";
    button2Extend.style.transition = "0.5s"
});

button3.addEventListener("mouseover", function() {
    button3Extend.style.width = "108%";
    button3Extend.style.transition = "0.5s"
});
button3.addEventListener("mouseleave", function() {
    button3Extend.style.width = "80%";
    button3Extend.style.transition = "0.5s"
});


