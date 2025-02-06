var description = document.querySelector(".description-one");
var product = document.querySelector(".product-one");

function appear() {
  description.classList.toggle("is-appear");
  product.classList.toggle("is-appear");
}

product.addEventListener("click", appear);

var description = document.querySelector(".description-two");
var product = document.querySelector(".product-two");

function appear2() {
  description.classList.toggle("is-appear");
  product.classList.toggle("is-appear");
}

product.addEventListener("click", appear2);

var description = document.querySelector(".description-two");
var product = document.querySelector(".product-two");

function appear3() {
  description.classList.toggle("is-appear");
  product.classList.toggle("is-appear");
}

product.addEventListener("click", appear3);

/*
var yellowbox = document.querySelector(".change-color");

function changeColor() {
  yellowbox.classList.add("is-active");
}

yellowbox.addEventListener("click", changeColor);

var orangebox = document.querySelector(".toggle-color");

function toggleColor() {
  orangebox.classList.toggle("is-active");
}

orangebox.addEventListener("click", toggleColor);

var pinkbox = document.querySelector(".trigger");
var redbox = document.querySelector(".target");

function disapear() {
  redbox.classList.toggle("is-hidden");
}

pinkbox.addEventListener("click", disapear);

var greenbox = document.querySelector(".trigger-all");

function changeColor2() {
  yellowbox.classList.add("is-active");
  orangebox.classList.add("is-active");
}

greenbox.addEventListener("click", changeColor2);

var bluebox = document.querySelector(".trigger-all-self");

function changeColor3() {
  yellowbox.classList.add("is-active");
  orangebox.classList.add("is-active");
  bluebox.classList.add("is-active");
}

bluebox.addEventListener("click", changeColor3);
*/
