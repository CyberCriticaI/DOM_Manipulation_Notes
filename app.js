////////////////////////////////////////
// ===== Selecting DOM Elements ===== //
////////////////////////////////////////

// .getElementById()
const element = document.getElementById("hello");
console.log(element)

// .getElementsByName()
const selects = document.getElementsByName("selectBy");
console.log(selects);

// .querySelector()
const h2 = document.querySelector("h2");
// const h2 = document.querySelector("#h2-two");
// const h2 = document.querySelector(".h2-three");
console.log(h2)

// .querySelectorAll()
const h2Els = document.querySelectorAll("h2");
console.log(h2Els)

// Properties for Accessing Parent/Child/Sibling Nodes
console.log(h2.parentNode);
console.log(document.querySelector("body").childNodes)

/*
  Additional Properties
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
*/

console.log('-------------')

//////////////////////////////////////
// ===== Manipulating the DOM ===== //
//////////////////////////////////////

// Appending a single-child
const body = document.querySelector('body');
const h3 = document.createElement('h3');

h3.textContent = 'This was created using JS';
body.appendChild(h3);
h2.appendChild(h3);

// Appending multiple-children dynamically using a loop
for (let i = 0; i < 5; i++) {
  const h4 = document.createElement('h4');
  h4.textContent = 'This was created inside a loop';
  body.appendChild(h4)
}

///////////////////////////
// DOM Insertion Methods //
///////////////////////////

// .appendChild()
// Since a node cannot be in two places simultaneously, this will move the given node 
// to the new location if it already exists elsewhere in the DOM.

body.appendChild(h3);
const newH3 = document.createElement('h3');
newH3.textContent = 'This is a new h3 element';
body.appendChild(newH3);

// .prepend()
// Adds a node to the beginning of a list of children of a specified parent node. 

const commentList = document.getElementById('comments');

const listItem1 = document.createElement('li');
listItem1.textContent = 'item 1';

const listItem2 = document.createElement('li');
listItem2.textContent = 'item 2';

commentList.prepend(listItem1);
commentList.prepend(listItem2); // The above <li>item 2</li> is being prepended so it shows up first in the document


// .insertBefore()
// Adds a node before another node in a list of children of a specified parent node.

const listItem3 = document.createElement('li');
listItem3.textContent = 'item 3';
commentList.insertBefore(listItem3, commentList.lastChild)

// .removeChild()
// The removeChild method removes a child node from the node that it is called on.
const removedNode = commentList.removeChild(commentList.firstChild);
console.log(removedNode);

// .replaceChild()
const listItem4 = document.createElement('li');
listItem4.textContent = 'item 4';

commentList.replaceChild(listItem4, commentList.firstChild)

////////////////////////////////////////
// Changing the content of an Element //
////////////////////////////////////////

// Changing Text
const p1 = document.createElement('p');
p1.textContent = '<strong>this text is important</strong>';
document.body.appendChild(p1)

const p2 = document.createElement('p');
p2.innerHTML = '<strong>this text is important</strong>';
document.body.appendChild(p2)

// Changing Element Styles
h2.style.backgroundColor = 'red';

// Changing Element Attributes
console.log(p1.hasAttribute('id'))
p1.setAttribute('id', 'paragraph-1')
console.log(p1.getAttribute('id'))

// The classList Property
const h5 = document.querySelector('h5');
h5.classList.add('bowser');
h5.classList.add('kirby');
h5.classList.remove('kirby');
h5.classList.toggle('mario');
h5.classList.toggle('wario');
console.log(h5.classList);
console.log('-----------');

///////////////////////////
// Event Handler Example //
///////////////////////////

const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const ul = document.querySelector('.todo-list');
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
})