'use strict';

/**
 * @ngdoc directive
 * @name monasnipApp.directive:imgPrev
 * @description
 * # imgPrev
 */
 

 
angular.module('monasnipApp')
	.directive('imgPrev', ['imgBridge', function (imgBridge) {
		return {
			template: '<img ng-src={{imageData}}></div>',
			restrict: 'E',
			link: (scope, element, attrs, controller) => {
				
				imgBridge.addListener((bridge) => {debugger;
					scope.imageData = bridge.getData();
					}
				);
			}
		};
	}]);
