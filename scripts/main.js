let myImage = document.querySelector("img");
// Функція підміни картинок по кліку
myImage.onclick = function () {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/dog1.jpg") {
		myImage.setAttribute("src", "images/dog2.jpg");
	} else if (mySrc === "images/dog2.jpg") {
		myImage.setAttribute("src", "images/dog3.jpg");
	} else {
		myImage.setAttribute("src", "images/dog1.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// функція привітання по імені
function setUserName() {
	let myName = prompt("Введіть своє ім'я.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Crispy snack вітає Вас, " + myName;
}
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.textContent = "Crispy snack вітає Вас, " + storedName;
}

myButton.onclick = function () {
	setUserName();
};

console.log("Hello");
