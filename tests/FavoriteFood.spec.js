describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	
	it('should return a list of favorite food', function(){
		var fakeList = [{
			name: "Brad",
			favoriteFood: "Bread"
		},{
			name: "Carrie",
			favoriteFood: "Corn"
		},{
			name: "Pete",
			favoriteFood: "pizza"
		}
	];

		var results = $filter('favoriteFood')(fakeList, "pizza");
		expect(results[0].name).toBe('Pete');
	})

	
});
