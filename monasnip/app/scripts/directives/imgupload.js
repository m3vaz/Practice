'use strict';

/**
 * @ngdoc directive
 * @name monasnipApp.directive:imgUpload
 * @description
 * # imgUpload
 */
function link(scope, element, attrs, controller) {
	//element.text('this is the imgUpload directive');
	
	debugger;
	// add file changed
	scope.file_changed = function (element){
		var imgFile = element.files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			alert('file read complete');
			};
		reader.readAsDataURL(imgFile);
	};
}
		  
angular.module('monasnipApp')
	.directive('imgUpload', ['imgBridge', function (imgBridge) {
		
		return {
			template: '<input type="file" accept="image/*" onchange="angular.element(this).scope().file_changed(this)" />',
			
			restrict: 'E',
			link: (scope, element, attrs, controller) => {
										
					scope.file_changed = function (element){
						var imgFile = element.files[0];
						var reader = new FileReader();
						reader.onload = function(e) {	
							imgBridge.setData(e.target.result);
							};
						reader.readAsDataURL(imgFile);
						
					};
					
				}
		};
	}]); 

