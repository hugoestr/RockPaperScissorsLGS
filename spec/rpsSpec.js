describe("Strategy", function(){
	var rps;

	beforeEach(function(){
		rps = new Strategy();
	});

	it("should give you an answer", function(){
		var answer = rps.answer();
		expect(answer).not.toBeNull();
	});
});

describe
