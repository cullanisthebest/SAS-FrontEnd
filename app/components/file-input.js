import Ember from 'ember';

//import XLSX from 'npm:xlsx';

//XLSX = require('xlsx');

export default Ember.TextField.extend({
	store: Ember.inject.service(),
	type: 'file',
	change: function(e) {
		let self = this;

		var inputFiles = e.target.files;

		if (inputFiles.length < 1) {
			return;
		}

		let inputFile = inputFiles[0];

		// let fileInfo = {
		// 	name: inputFile.name,
		// 	type: inputFile.type || 'n/a',
		// 	size: inputFile.size,
		// 	date: inputFile.lastModifiedDate ?
		// 	inputFile.lastModifiedDate.toLocaleDateString() : 'n/a',
		// };

		console.log(inputFile);

		var fileReader = new FileReader();

		fileReader.onload = function(e) {
			var buffer = e.target.result;

			var workbook = XLSX.read(buffer, {type: 'binary'});

			var first_sheet_name = workbook.SheetNames[0];
			var worksheet = workbook.Sheets[first_sheet_name];

			//convert workbook to csv
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

			//output the workbook as csv
			function process_student_wb(wb) {
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);
				//console.log(row);

				for(var i=0; i<5; i++){
					if(row[2][i] == "number")
						var numberIndex = i;
					else if(row[2][i] == "firstName")
						var firstNameIndex = i;
					else if(row[2][i] == "lastName")
						var lastNameIndex = i;
					else if(row[2][i] == "gender")
						var genderIndex = i;
					else if(row[2][i] == "DOB")
						var DOBIndex = i;
					else if(row[2][i] == "residency")
						var residencyIndex = i;
				}

				for (var i=3; i<5; i++){
					saveStudent(row[i][numberIndex], row[i][firstNameIndex], row[i][lastNameIndex], row[i][genderIndex], row[i][DOBIndex], row[i][residencyIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

		      function saveStudent (number, firstName, lastName, gender, DOB, residency) {
		        var myStore = self.get('store');

				myStore.query('residency', {name: residency}).then(function (residencies) {
					var oneResidency = residencies.objectAt(0);

					myStore.query('gender', {name: gender}).then(function (genders) {
						var oneGender = genders.objectAt(0);
						
						var newStudent = myStore.createRecord('student', {
				          number: number,
				          firstName: firstName,
				          lastName: lastName,
				          DOB: DOB,
				          resInfo: oneResidency,
				          gender: oneGender,
				          country: "",
				          province: "",
				          city: "",
				          academicload: ""
				        });
				        newStudent.save()
				    });
				});
		      }

			process_student_wb(workbook);
		}
		//read in the input file
		fileReader.readAsBinaryString(inputFile);
	}
});