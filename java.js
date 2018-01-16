var result = '';

function buff(val){
  var buff = '';
  var pad = 4 - val;
    while( pad-- > 0 )
            buff += ' ';            
  return buff;
}

function generate_table() {
  	var color_td,
  	rows = document.getElementById('rows').value,
  	columns = document.getElementById('columns').value;
	document.write("<table border='1px'>");
	columns++, rows++;
	for(var i = 0; i < columns; i++) {

		document.write("<tr style='height:30px;'>");

		for(var j = 0; j < rows; j++) {

			if(j>0&&i>0)
			{
				color_td = "#FFA500";
				document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
			}
		}
		document.write("</tr>");
	}

	document.write("</table>");
}

