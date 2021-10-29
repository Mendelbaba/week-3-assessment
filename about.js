console.log("hello world");
const testButton = document.querySelector("#test-btn")

function testButtonfunc() {
	console.log("hey you got this function")
}

testButton.addEventListener("click",testButtonfunc)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("User has successfully submitted the form.");
}


let form = document.querySelector('form#contact');

form.addEventListener("click", handleSubmit);

let duck = document.getElementById("duck-pic");

duck.addEventListener("mouseover", duckCompliments);

function duckCompliments() {
	alert("whats cookin good lookin");
}
