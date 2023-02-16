import './style.css';

console.log(123);

const testElement = document.createElement('h1');
testElement.innerHTML = "This should be red";
const pageContent = document.querySelector('#content');
pageContent.appendChild(testElement);