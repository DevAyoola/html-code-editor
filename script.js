// function to open file
function openfile() {
	var reader = new FileReader();
	var file = document.getElementById("file").files[0];

	reader.onload = function (e) {
		document.querySelector(".code").value = e.target.result;
	};
	reader.readAsText(file);
}

// function to clear text
function cleartext() {
	document.querySelector(".code").value = "";
}

// declaring variables to run html code
const code = document.querySelector(".code");
const iframe = document.querySelector("iframe");
const run = document.querySelector("#run");

// to run html code
run.addEventListener("click", () => {
	var html = code.value;
	iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

// to make button goback and iframe invisible
document.getElementById("goback").style.display = "none";
document.querySelector(".result").style.display = "none";

function hide() {
	document.getElementById("cc").style.display = "none";
	document.getElementById("goback").style.display = "block";
	document.querySelector(".code").style.display = "none";
	document.querySelector(".result").style.display = "block";
}

function show() {
	document.getElementById("cc").style.display = "block";
	document.getElementById("goback").style.display = "none";
	document.querySelector(".code").style.display = "block";
	document.querySelector(".result").style.display = "none";
}
