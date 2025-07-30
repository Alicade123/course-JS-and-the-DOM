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

const clickhere = document.querySelector("#clickhere");
console.log(clickhere);

clickhere.addEventListener("click", function () {
  document.body.remove();
  // console.log("i'm clicked");
});

//example1.
const newCustomElement = document.createElement("div");

for (let i = 0; i <= 200; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = `This is paragraph number: ${i}`;
  newElement.addEventListener(
    "click",
    function (event) {
      console.log(event);
      console.log(`${newElement.innerHTML}`);
    },
    { passive: true }
  );
  newCustomElement.appendChild(newElement);
}

// document.body.appendChild(newCustomElement);
document.body.insertAdjacentElement("beforeend", newCustomElement);

//example 2:

const newCustomDiv = document.createElement("div");
const respondToTheClickEvent = function (event) {
  console.log(event);
  console.log("The element is clicked");
};
for (let i = 0; i <= 50; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = `This is paragraph number: ${i}`;
  newElement.addEventListener("click", respondToTheClickEvent, {
    passive: true,
  });
  newCustomDiv.appendChild(newElement);
}
document.body.insertAdjacentElement("beforebegin", newCustomDiv);

//example 3:

const newCustomDivbtn = document.createElement("div");
const respondToTheClickEventbtn = function (event) {
  const elementedClicked = event.target;
  elementedClicked.style.cssText =
    "font-size:2em; background-color:black; color: white; font-weight:bold ";
  console.log(event);
  console.log("The element is clicked : " + elementedClicked.innerHTML);
};
for (let i = 0; i <= 10; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = `This is paragraph number: ${i}`;

  newCustomDivbtn.appendChild(newElement);
}
newCustomDivbtn.addEventListener("click", respondToTheClickEventbtn, false);
coaches.insertAdjacentElement("beforebegin", newCustomDivbtn);

//p and inner span's
// document.querySelector("#content").addEventListener("click", function (evt) {
//   console.log("A span was clicked with text " + evt.target.textContent);
// });

document.querySelector("#content").addEventListener("click", function (evt) {
  if (evt.target.nodeName === "SPAN") {
    // ← verifies target is desired element
    console.log("A span was clicked with text " + evt.target.textContent);
  }
});
