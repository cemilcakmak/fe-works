console.log("test");
const container = document.querySelector('#container');

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red"
container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement('div');
div.style.border = "1px black solid";
div.style.backgroundColor = "pink";

const subH1 = document.createElement('h1');
subH1.textContent = "I'm in a div";
div.appendChild(subH1);
const subP = document.createElement('p');
subP.textContent = "ME TOO!";
div.appendChild(subP);
container.appendChild(div);
