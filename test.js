const innerResults = document.querySelector("#pick-me").innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector("#pick-me").outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"

const first_dev = document.getElementById("first-div");

const notes = document.createElement("p");
notes.innerHTML = "my name is Alicade";
first_dev.appendChild(notes);

const ul = document.getElementsByTagName("ul")[0];
console.log(ul);

const li = document.createElement("li");
li.innerHTML = "Elie";
const li2 = document.createElement("li");
li2.innerHTML = "None";

ul.appendChild(li);
ul.appendChild(li2);
console.log(li);

const coaches = document.getElementsByClassName("coaches")[0];
console.log(coaches.innerHTML);

coaches.insertAdjacentHTML(
  "beforebegin",
  "THE GYM RWANDA (SOFTWARE INTENSE PROGRAM)"
);
coaches.insertAdjacentHTML("afterbegin", "THE NAME OF COACHES");
coaches.insertAdjacentHTML("beforeend", "Christella");
coaches.insertAdjacentHTML("afterend", "Copyrigt@2025");

const first_element = coaches.firstElementChild;
const last_element = coaches.lastElementChild;
const parent_element = coaches.parentElement;
console.log(first_element);
console.log(parent_element);

first_element.style.color = "green";
first_element.style.fontSize = "2em";

last_element.style.cssText =
  "color: blue; background-color: orange; width : 30%; font-size: 3.5em";
