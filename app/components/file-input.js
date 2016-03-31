import Ember from 'ember';

export default Ember.TextField.extend({
	store: Ember.inject.service(),
	selectedInputType: null,
	type: 'file',
	change: function(e) {
		let self = this;

		var inputFiles = e.target.files;

		if (inputFiles.length < 1) {
			return;
		}

		let inputFile = inputFiles[0];

		console.log(inputFile);

		var fileReader = new FileReader();

		fileReader.onload = function(e) {
			var buffer = e.target.result;

			var workbook = XLSX.read(buffer, {type: 'binary'});

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

			function process_termcode_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveTermcode(row[i][nameIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveTermcode (name) {
				var myStore = self.get('store');
				var newTermcode = myStore.createRecord('termcode', {
					name: name
				});
				newTermcode.save();
			}

			function process_degreecode_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveDegreecode(row[i][nameIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveDegreecode (name) {
				var myStore = self.get('store');
				var newDegreecode = myStore.createRecord('degreecode', {
					name: name
				});
				newDegreecode.save();
			}

			function process_coursecode_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<4; i++){
					if(row[2][i] == "code")
						var codeIndex = i;
					else if(row[2][i] == "number")
						var numberIndex = i;
					else if(row[2][i] == "name")
						var nameIndex = i;
					else if(row[2][i] == "unit")
						var unitIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveCoursecode(row[i][codeIndex], row[i][numberIndex], row[i][nameIndex], row[i][unitIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveCoursecode (code, number, name, unit) {
				var myStore = self.get('store');
				var newCoursecode = myStore.createRecord('coursecode', {
					code: code,
					number: number,
					name: name,
					unit: unit
				});
				newCoursecode.save();
			}

			function process_residency_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveResidency(row[i][nameIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveResidency (name) {
				var myStore = self.get('store');
				var newResidency = myStore.createRecord('residency', {
					name: name
				});
				newResidency.save();
			}

			function process_commentcode_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<4; i++){
					if(row[2][i].toLowerCase() == "code"){
						var codeIndex = i;
					}
					else if(row[2][i].toLowerCase() == "progaction"){
						var progactionIndex = i;
					}
					else if(row[2][i].toLowerCase() == "description"){
						var descriptionIndex = i;
					}
					else if(row[2][i].toLowerCase() == "notes"){
						var notesIndex = i;
					}
				}

				for (var i=3; i<row.length; i++){
					saveCommentcode(row[i][codeIndex], row[i][progactionIndex], row[i][descriptionIndex], row[i][notesIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveCommentcode (code, progaction, description, notes) {
				var myStore = self.get('store');
				var newCommentcode = myStore.createRecord('commentcode', {
					code: code,
					progaction: progaction,
					description: description,
					notes: notes
				});
				newCommentcode.save();
			}

			function process_admissionrule_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "description")
						var descriptionIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveAdmissionRule(row[i][descriptionIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveAdmissionRule (description) {
				var myStore = self.get('store');
				var newAdmissionRule = myStore.createRecord('admissionrule', {
					description: description
				});
				newAdmissionRule.save();
			}

			function process_faculty_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveFaculty(row[i][nameIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveFaculty (name) {
				var myStore = self.get('store');
				var newFaculty = myStore.createRecord('faculty', {
					name: name
				});
				newFaculty.save();
			}


			function process_department_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<2; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
					else if (row[2][i] == "faculty")
						var facultyIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveDepartment(row[i][nameIndex], row[i][facultyIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveDepartment (name, faculty) {
				var myStore = self.get('store');
				myStore.query('faculty', {name: faculty}).then(function (faculties) {
					var oneFaculty = faculties.objectAt(0);

					var newDepartment = myStore.createRecord('department', {
						name: name,
						faculty: oneFaculty
					});
					newDepartment.save();
				});
			}

			function process_country_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<1; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveCountry(row[i][nameIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveCountry (name) {
				var myStore = self.get('store');
				var newCountry = myStore.createRecord('country', {
					name: name
				});
				newCountry.save();
			}

			function process_province_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<2; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
					else if (row[2][i] == "country")
						var countryIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveProvince(row[i][nameIndex], row[i][countryIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveProvince (name, country) {
				var myStore = self.get('store');
				myStore.query('country', {name: country}).then(function (countries) {
					var oneCountry = countries.objectAt(0);

					var newProvince = myStore.createRecord('province', {
						name: name,
						country: oneCountry
					});
					newProvince.save();
				});
			}

			function process_city_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<2; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
					else if (row[2][i] == "province")
						var provinceIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveCity(row[i][nameIndex], row[i][provinceIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveCity (name, province) {
				var myStore = self.get('store');
				myStore.query('province', {name: province}).then(function (provinces) {
					var oneProvince = provinces.objectAt(0);

					var newCity = myStore.createRecord('city', {
						name: name,
						province: oneProvince
					});
					newCity.save();
				});
			}

			function process_programadministration_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<4; i++){
					if(row[2][i] == "name")
						var nameIndex = i;
					else if (row[2][i] == "position")
						var positionIndex = i;
					else if (row[2][i] == "academicprogramcode")
						var academicprogramcodeIndex = i;
					else if (row[2][i] == "department")
						var departmentIndex = i;
				}

				for (var i=3; i<row.length; i++){
					saveProgramAdministration(row[i][nameIndex], row[i][positionIndex], 
						row[i][academicprogramcodeIndex], row[i][departmentIndex]);
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveProgramAdministration (name, position, academicprogramcode, department) {
				var myStore = self.get('store');
				myStore.query('academicprogramcode', {name: academicprogramcode}).then(function (academicprogramcodes) {
					var oneAcademicprogramcode = academicprogramcodes.objectAt(0);

					myStore.query('department', {name: department}).then(function (departments) {
						var oneDepartment = departments.objectAt(0);

						var newProgramadministration = myStore.createRecord('programadministration', {
							name: name,
							position: position,
							academicprogramcode: oneAcademicprogramcode,
							department: oneDepartment
						});
						newProgramadministration.save();
					});
				});
			}

			function process_student_wb(wb) {
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);

				for(var i=0; i<9; i++){
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
					else if(row[2][i] == "country")
						var countryIndex = i;
					else if(row[2][i] == "province")
						var provinceIndex = i;
					else if(row[2][i] == "city")
						var cityIndex = i;
					else if(row[2][i] == "academicload")
						var academicloadIndex = i;
				}

				for (var i=3; i<row.length; i++){
					// var myStore = self.get('store');
					// myStore.query('student', {number: row[i][numberIndex]}).then(function (students) {
					// 	if(students.objectAt(0)===undefined){
							saveStudent(row[i][numberIndex], row[i][firstNameIndex], 
								row[i][lastNameIndex], row[i][genderIndex], row[i][DOBIndex], 
								row[i][residencyIndex], row[i][countryIndex], row[i][provinceIndex],
								row[i][cityIndex], row[i][academicloadIndex]);
					// 	}
					// 	else{
					// 		alert('There are no new students to import!');
					// 	}
					// });
				}

				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}

			function saveStudent (number, firstName, lastName, gender, DOB, residency, country, province, city, academicload) {
				var myStore = self.get('store');

				myStore.query('residency', {name: residency}).then(function (residencies) {
					var oneResidency = residencies.objectAt(0);

					myStore.query('gender', {name: gender}).then(function (genders) {
						var oneGender = genders.objectAt(0);

						myStore.query('country', {name: country}).then(function (countries) {
							var oneCountry = countries.objectAt(0);

							myStore.query('province', {name: province}).then(function (provinces) {
								var oneProvince = provinces.objectAt(0);

								myStore.query('city', {name: city}).then(function (cities) {
									var oneCity = cities.objectAt(0);

									myStore.query('academicload', {name: academicload}).then(function (academicloads) {
										var oneAcademicload = academicloads.objectAt(0);
										var newStudent = myStore.createRecord('student', {
											number: number,
											firstName: firstName,
											lastName: lastName,
											DOB: DOB,
											cumAvg: "",
											resInfo: oneResidency,
											gender: oneGender,
											country: oneCountry,
											province: oneProvince,
											city: oneCity,
											academicload: oneAcademicload
										});
										newStudent.save()
									});
								});
							});
						});
					});
				});
			}

			function process_programRecords_wb(wb){
				var output = to_csv(wb);
				var row = $.csv.toArrays(output);
				var GradeHolder=new Array(4);
				//what student I'm on
				var onStudentNumber=0;
				var programrecordHolder;
				var studentNumber;
				var termCodeName;
				var degreeCodeName;
				var comment;
				var level;
				var cumAvg;


				for(var i=0; i<14; i++){
					if(row[2][i].toLowerCase() == "")
						var onStudentIndex = i;
					else if(row[2][i].toLowerCase() == "student")
						var studentNumIndex = i;
					else if(row[2][i].toLowerCase() == "code")
						var courseCodeIndex = i;
					else if(row[2][i].toLowerCase() == "number")
						var courseNumIndex = i;
					else if(row[2][i].toLowerCase() == "section")
						var gradeSectionIndex = i;
					else if(row[2][i].toLowerCase() == "name")
						var courseNameIndex = i;
					else if(row[2][i].toLowerCase() == "unit")
						var courseUnitIndex = i;
					else if(row[2][i].toLowerCase() == "mark")
						var gradeMarkIndex = i;
					else if(row[2][i].toLowerCase() == "level")
						var programrecordLevelIndex = i;
					else if(row[2][i].toLowerCase() == "status")
						var programrecordStatusIndex = i;
					else if(row[2][i].toLowerCase() == "comment")
						var programrecordCommentIndex = i;
					else if(row[2][i].toLowerCase() == "plan")
						var degreecodeIndex = i;
					else if(row[2][i].toLowerCase() == "semester")
						var termcodeIndex = i;
					else if(row[2][i].toLowerCase() == "cumavg")
						var cumAvgIndex = i;
				}

				for(var i=3; i<row.length; i++)
				{
					if(row[i][onStudentIndex]==onStudentNumber+1)
					{
						console.log("On student number: "+onStudentNumber);
						onStudentNumber++;
						//studentNumber
						studentNumber=row[i][studentNumIndex];
						//needed for program record
						level=row[i][programrecordLevelIndex];
						status=row[i][programrecordStatusIndex];
						comment=row[i][programrecordCommentIndex];
						//needed for degreecode
						degreeCodeName=row[i][degreecodeIndex];
						//needed for term code
						termCodeName=row[i][termcodeIndex];
						//cumulative average
						cumAvg = row[i][cumAvgIndex];
					}
					//code
					GradeHolder[4]=row[i][courseCodeIndex];
					//coursenumber
					GradeHolder[0]=row[i][courseNumIndex];
					//section
					GradeHolder[1]=row[i][gradeSectionIndex];
					//mark
					GradeHolder[2]=row[i][gradeMarkIndex];

					if(GradeHolder[0]!=""){
						saveProgramRecords(level, status, comment, cumAvg, degreeCodeName, termCodeName,
							studentNumber, GradeHolder[1], GradeHolder[2], GradeHolder[0], GradeHolder[4]);
					}
				}
				if(out.innerText === undefined) out.textContent = output;
				else out.innerText = output;
			}
	        function saveProgramRecords (level, status, comment, cumAvg, degreeCodeName, termCodeName, studentNumber, section, mark, courseNumber, courseCode) {
		        var myStore = self.get('store');
		        myStore.query('degreecode', {name: degreeCodeName}).then(function (degreecodes) {
					var FoundDegreeCode = degreecodes.objectAt(0);
					myStore.query('termcode', {name:termCodeName}).then(function (termcodes) {
						var FoundtermCode = termcodes.objectAt(0);
				        var newProgramRecord = myStore.createRecord('programrecord',{
				        	level:level,
				        	status:status,
				        	comment:comment,
				        	degreecode:FoundDegreeCode,
				        	termcode:FoundtermCode
				        });
			        	newProgramRecord.save().then(() => {
			        		var myStore = self.get('store');
		    				myStore.query('student', {number: studentNumber}).then(function (students) {
								var FoundStudent = students.objectAt(0);
								FoundStudent.set('cumAvg', cumAvg); //set cumulative average for the student
								FoundStudent.save();
								myStore.query('coursecode', {number:courseNumber, code:courseCode}).then(function (coursecodes) {
									var FoundCourse = coursecodes.objectAt(0);
									var newGrade = myStore.createRecord('grade',{
							        	mark:mark,
							        	section:section,
							        	student:FoundStudent,
							        	coursecode:FoundCourse,
							        	programrecord:newProgramRecord
							    	});
									newGrade.save().then(()=> {
									});
								});
							});
						});
					});
				});
		    }




			if (confirm ('Are you sure you want to import this file?\n***WARNING: DO NOT IMPORT TWICE!***')) {  
				if(self.get('selectedInputType') == "Students"){
					process_student_wb(workbook);
					alert("Students imported successfully!");
				}
				else if (self.get('selectedInputType') == "Countries"){
					process_country_wb(workbook);
					alert("Countries imported successfully!");
				}
				else if (self.get('selectedInputType') == "Provinces"){
					process_province_wb(workbook);
					alert("Provinces imported successfully!");
				}
				else if (self.get('selectedInputType') == "Cities"){
					process_city_wb(workbook);
					alert("Cities imported successfully!");
				}
				else if (self.get('selectedInputType') == "Term Codes"){
					process_termcode_wb(workbook);
					alert("Term codes imported successfully!");
				}
				else if (self.get('selectedInputType') == "Degree Codes"){
					process_degreecode_wb(workbook);
					alert("Degree codes imported successfully!");
				}
				else if (self.get('selectedInputType') == "Course Codes"){
					process_coursecode_wb(workbook);
					alert("Course codes imported successfully!");
				}
				else if (self.get('selectedInputType') == "Comment Codes"){
					process_commentcode_wb(workbook);
					alert("Comment codes imported successfully!");
				}
				else if (self.get('selectedInputType') == "Residencies"){
					process_residency_wb(workbook);
					alert("Residencies imported successfully!");
				}
				else if (self.get('selectedInputType') == "Admission Rules"){
					process_admissionrule_wb(workbook);
					alert("Admission Rules imported successfully!");
				}
				else if (self.get('selectedInputType') == "Program Administration"){
					process_programadministration_wb(workbook);
					alert("Program Administration imported successfully!");
				}
				else if (self.get('selectedInputType') == "Faculties"){
					process_faculty_wb(workbook);
					alert("Faculties imported successfully!");
				}
				else if (self.get('selectedInputType') == "Departments"){
					process_department_wb(workbook);
					alert("Departments imported successfully!");
				}
				else if (self.get('selectedInputType') == "Program Record and Grades"){
					process_programRecords_wb(workbook);
					alert("Program records and grades imported successfully!");
				}
			}
		}

		fileReader.readAsBinaryString(inputFile);
	}
});