//1
document.getElementById("container");

//2
document.querySelector("#container")

//3
document.getElementsByClassName("second")

//4
document.querySelector("ol .third");

//5
const section = document.querySelector("#container");
section.innerText = "Hello";

//6
const footer = document.querySelector(".footer");
footer.classList.add("main");

//7
footer.classList.remove("main")

//8
const newLi = document.createElement('li');

//9
newLi.innerText = "four";

//10
const ul = document.querySelector('ul');
ul.append(newLi);

//11
const insideLi = document.querySelectorAll("ol li")
for(let li of insideLi) {
    li.style.backgroundColor = "green";
}

//12
const footer = document.querySelector(".footer");
footer.remove()