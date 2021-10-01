var containerFirst = document.getElementById("container-1");
var containerSecond = document.getElementById("container-2");
var containerThird = document.getElementById("container-3");
var bulb1 = document.querySelector("#container-1 > div:nth-child(1)");
var bulb2 = document.querySelector("#container-2 > div:nth-child(1)");
var bulb3 = document.querySelector("#container-3 > div:nth-child(1)");


var array = [containerFirst, containerSecond, containerThird];

function hoverContainer () {
    for (let i = 0; i <= 3; i++) {

        array[i].addEventListener("mouseover", function() {
            array[i].style.top = "5px";
            array[i].style.transition = "0.5s";
        });

        array[i].addEventListener("mouseleave", function() {
            array[i].style.top = "-32px";
            array[i].style.transition = "0.5s";
        });
    }
}

containerFirst.addEventListener("mouseover", function() {
    bulb1.style.backgroundImage = "url('bulb1.png')"
});
containerFirst.addEventListener("mouseleave", function() {
    bulb1.style.backgroundImage = "url('bulb.png')"
});


containerSecond.addEventListener("mouseover", function() {
    bulb2.style.backgroundImage = "url('bulb2.png')"
});
containerSecond.addEventListener("mouseleave", function() {
    bulb2.style.backgroundImage = "url('bulb.png')"
});

containerThird.addEventListener("mouseover", function() {
    bulb3.style.backgroundImage = "url('bulb3.png')"
});
containerThird.addEventListener("mouseleave", function() {
    bulb3.style.backgroundImage = "url('bulb.png')"
});

hoverContainer();