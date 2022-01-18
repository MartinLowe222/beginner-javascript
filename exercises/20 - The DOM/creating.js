console.log("it works!");
const myParagraph = document.createElement("p");

myParagraph.textContent = "Iam a P";
myParagraph.classList.add("special");

console.log(myParagraph);

const myImage = document.createElement("img");
myImage.src = "https://picsum.photos/500";
myImage.alt = "Nice photo";

const myDiv = document.createElement("div");
myDiv.classList.add("wrapper");
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

// A node can be an element or a plan piece of text 

// wait hang on i want to add something to the top like a heading 

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);
// insert adjacent element takes two parameters the postion which must match the following on the MDN docs and then the element

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

// lets do a list of cards 
 
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = "three";
list.appendChild(li);

document.body.insertAdjacentElement("afterbegin", list);

const li5 = document.createElement("li");
li5.textContent = "five";
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = "one";
list.insertAdjacentElement("afterbegin", li1);