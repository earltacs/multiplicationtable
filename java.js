
function generateTable(){
	var rows = parseInt(document.getElementById('rows').value);
	var columns = parseInt(document.getElementById('columns').value);
	rows++; columns++;
	
	var htmlContainer = "<table border='1' id='tab' style='border-color: #848484; border-style: none; width: 100px; height: 100px; margin'>";
	
	for (var i = 1; i < columns; i++) {
		htmlContainer += "<tr>"
		for (var j = 1; j < rows; j++) {
			htmlContainer += "<td id ='tab1'>" + (i*j) + "</td>"
		}
		htmlContainer += "</tr>";
	}

	document.getElementById('table').innerHTML = htmlContainer;	
}

function bgColorChange(){
	var color = document.getElementById('bgcolor').value;
	
	document.getElementById('tab').style.backgroundColor = color;
	document.getElementById('tab').style.borderColor = color;
}

function txtColorChange(){
	var color = document.getElementById('txtcolor').value;
	
	document.getElementById('tab').style.color = color;
}