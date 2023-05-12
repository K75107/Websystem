const author = document.getElementById("author");
const hobbies = document.getElementById("hobbies");
const back = document.getElementById("our_background");

const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");

author.addEventListener("click", function() {

    box4.style.display = "block";
    box5.style.display = "none";
    box6.style.display = "none";

});

hobbies.addEventListener("click", function() {

    box5.style.display = "block";
    box6.style.display = "none";
    box4.style.display = "none";

});

back.addEventListener("click", function() {

    box6.style.display = "block";
    box4.style.display = "none";
    box5.style.display = "none";

});
