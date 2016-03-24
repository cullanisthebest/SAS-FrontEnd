// import Ember from 'ember';

// export default Ember.Component.extend({
// 	store: Ember.inject.service(),
// 	file: null,

// 	actions: {
// 		fileSelectionChanged: function(file) {
// 			this.set('file', file)
// 		},
// 		function handleFile(e) {
// 			var files = e.target.files;
// 			var i,f;
// 			for (i = 0, f = files[i]; i != files.length; ++i) {
// 				var reader = new FileReader();
// 				var name = f.name;
// 				reader.onload = function(e) {
// 					var data = e.target.result;

// 					var workbook = XLSX.read(data, {type: 'binary'});

// 					/* DO SOMETHING WITH workbook HERE */
// 				};
// 				reader.readAsBinaryString(f);
// 			}
// 		}
// 		input_dom_element.addEventListener('change', handleFile, false);
// 	}
// });
