'use strict';

/**
 * @ngdoc function
 * @name monasnipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the monasnipApp
 */
angular.module('monasnipApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('monasnipApp')
	.factory('imgBridge', function() {
		var imgBridge;
		alert('called');
		var _imgData = null;
		var _listeners = [];
		imgBridge = { 	getData: function() {return _imgData;}, 
						setData: function(data) {
							_imgData = data; 
							_listeners.forEach((lntr_func) => {lntr_func(this);});
							},
						addListener: (listener) => { _listeners.push(listener);}
					};
		return imgBridge;
	});