const map = document.querySelector(".location-image");
const modalmap = document.querySelector(".modal-map");
const hidemap = modalmap.querySelector(".close");
const modalLetter = document.querySelector(".modal-letter");
const lost = document.querySelector(".lost-link");
const hideLetter = modalLetter.querySelector(".close");

const login = modalLetter.querySelector("[name=name]");
const mail = modalLetter.querySelector("[name=email]")
const form = modalLetter.querySelector("form");

const figure = document.querySelector(".figure-content")
const caption = document.querySelector(".gallery-heading")
const right = document.querySelector(".right")
const left = document.querySelector(".left")
const transition = document.querySelector(".transition")

map.addEventListener("click", function(evt){
    evt.preventDefault();
    modalmap.classList.add("visible");
});

hidemap.addEventListener("click", function(){
        modalmap.classList.remove("visible");
});

lost.addEventListener("click", function(fn){
    fn.preventDefault();
    modalLetter.classList.add("visible");

});

hideLetter.addEventListener("click", function(){
    modalLetter.classList.remove("visible");
});

right.addEventListener("click", function(){
    figure.classList.add("movement");
    caption.classList.add("movement");
    figure.classList.remove("transition");
    caption.classList.remove("transition");
})

left.addEventListener("click", function(){
    figure.classList.remove("movement");
    caption.classList.remove("movement");
    figure.classList.add("transition");
    caption.classList.add("transition");
})