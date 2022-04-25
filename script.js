const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";

container.appendChild(redText);

const blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3!";

container.appendChild(blueText);

const div = document.createElement("div");
div.setAttribute("style", "border: solid; background-color: pink;");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(meToo);
container.appendChild(div);