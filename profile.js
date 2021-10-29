

const favColor = document.getElementById("color");

const favPlace = document.getElementById("place");

const favRitual = document.getElementById("ritual");

favRitual.addEventListener("click", ritualReveal);

function ritualReveal() {
    alert("Morning coffee");
};

favPlace.addEventListener("click", placeReveal);

function placeReveal() {
    alert("di pletzel is a pretty cool place");
};

favColor.addEventListener("click", colorReveal);

function colorReveal() {
    alert("Blue");
};