describe("RockPaperScissors", function(){
	var rps;

	beforeEach(function(){
       		rps = new RockPaperScissors();
	});


	it("has playing set to true", function(){
		expect(rps.playing).toBe(true);
	});

	describe("when playing a winning move", function(){
	   beforeEach(function(){
		rps.playTurn("scissors");
	   });

	   it("computer_money increases to $110 ", function(){
		expect(rps.player_money).toEqual(110);
		});
	
	});

	describe("when losing", function(){
		it("should set playing to false", function(){
			rps.player_money = 0;
			rps.playTurn("rock");
			expect(rps.playing).toBe(false);
		});
	});

});

