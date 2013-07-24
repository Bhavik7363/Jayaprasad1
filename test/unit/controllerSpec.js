'use strict';

/* jasmine specs for controllers go here */

describe('MyCtrl', function(){
  var scope, ctrl;
	beforeEach(module('MyApp'));
	beforeEach(inject(function($injector, $controller, $rootScope) {  
		scope = $rootScope.$new();
		ctrl = $controller(AdditionalCtrl, { $scope: scope });
  }));

  it('It should add the value 2,3 and return the result', function() {
		var add=scope.add(2,3);
    expect(add).toEqual(5);
  });
});