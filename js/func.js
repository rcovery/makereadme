var rt = document.getElementById("rtext");

// Functions to apply effects
function modtext(tag){
	let selection = document.getSelection();
	if (selection != ""){
		document.execCommand('insertHTML', false, `<${tag}>` + document.getSelection() + `</${tag}>`);
	}
}

function strong() {
	if (document.getSelection() != ""){
		document.execCommand('insertHTML', false, '<b><i>' + document.getSelection() + '</b></i>');
	}
}

function icode(){
	if (document.getSelection() != ""){
		let language = window.prompt("(This editor does not work with colored syntaxes)\nWhich programming language do you want to use?");
		if (language != ""){
			let selection = document.getSelection();
			document.execCommand('insertHTML', false, `\n<code class="${language}icode">` + selection.toString().split("<").join("&lt;") + `</code>&nbsp;`);
		}
	}

}

// Function to download README.md
function down(){
	let txt = rt.innerHTML;

	// Removing div and br tags
	var newTxt = txt.split("<div>").join("").split("</div>").join("").split("<br>").join("\n");
	// Replacing spaces
	newTxt = newTxt.split("&nbsp;").join(" ");
	// Replace code tags
	newTxt = newTxt.split("<code ").join("\n```").split('class="').join("").split('icode">').join("\n").split("</code>").join("\n```\n");

	document.getElementById("source").innerHTML = newTxt;
}
