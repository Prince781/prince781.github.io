"use strict";

// parses csv data
function parse_csv(location, func) {
	// create ajax
	var ajax;
	if (window.XMLHttpRequest)
		ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState != 4) {
			console.log("Cannot load CSV data yet.");
			return;
		}
		var text = ajax.responseText;
		var lines = text.split("\n");
		var rlines = [];
		for (var l=1; l<lines.length-1; l++)
			rlines[l-1] = lines[l].split(",");
		var columns = lines[0].split(","); // column names
		var rows = [];
		
		// split data into rows
		for (var r=0; r<rlines.length; r++) {
			rows[r] = {};
			for (var i=0; i<columns.length; i++) {
				columns[i] = columns[i].replace(/[\W]+/g, "").toLowerCase();
				rows[r][columns[i]] = rlines[r][i];
			}
		}
		
		func(rows); // call our function with passed information
	};
	
	ajax.open("GET", location, false);
	ajax.setRequestHeader("Accept-Encoding","text/plain");
	ajax.setRequestHeader("Content-Type", "text/plain");
	ajax.send(null);
}
