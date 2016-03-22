import Ember from 'ember';

//import XLSX from 'npm:xlsx';

//XLSX = require('xlsx');

export default Ember.TextField.extend({
	type: 'file',
	change: function(e) {
		let self = this;

		var inputFiles = e.target.files;

		if (inputFiles.length < 1) {
			return;
		}

		let inputFile = inputFiles[0];

		let fileInfo = {
			name: inputFile.name,
			type: inputFile.type || 'n/a',
			size: inputFile.size,
			date: inputFile.lastModifiedDate ?
			inputFile.lastModifiedDate.toLocaleDateString() : 'n/a',
		};

		console.log(inputFile);

		var fileReader = new FileReader();

		fileReader.onload = function(e) {
			var buffer = e.target.result;
			console.log("buffer:" + buffer);

			var workbook = XLSX.read(buffer, {type: 'binary'});
			console.log("workbook: " + workbook);
			console.log("stringify: " + JSON.stringify(workbook));

			var first_sheet_name = workbook.SheetNames[0];
			var worksheet = workbook.Sheets[first_sheet_name];

			function to_csv(workbook) {
				var result = [];
				workbook.SheetNames.forEach(function(sheetName) {
					var csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
					if(csv.length > 0){
						result.push("SHEET: " + sheetName);
						result.push("");
						result.push(csv);
					}
				});
				return result.join("\n");
			}

			function process_wb(wb) {
				var output = to_csv(wb);
				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
				console.log("output-content" + output);
			}

			process_wb(workbook);

			var range = {s:{c:0, r:0}, e: {c:5, r:16}};

			for(var R = range.s.r; R <= range.e.r; ++R) {
			  for(var C = range.s.c; C <= range.e.c; ++C) {
			    var cell_address = {c:C, r:R};
			    console.log(cell_address);
			    var desired_cell = worksheet[cell_address];
			    console.log(desired_cell);
			    var desired_value = desired_cell.v;
			    console.log(desired_value);
			  }
			}

		}
		fileReader.readAsBinaryString(inputFile);
	},
});