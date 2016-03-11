'use strict';

describe('Directive: imgprev', function () {

  // load the directive's module
  beforeEach(module('monasnipApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imgprev></imgprev>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imgprev directive');
  }));
});
