	function RockPaperScissors(){
			this.winner = false;
			this.playing = true;
			
			this.player_money = 100;
			this.computer_money = 100;
			this.outcome = "";
			
			this.tries = 0;
			this.won = 0;
		}

		RockPaperScissors.prototype.playTurn = function(player){
				 var computer, outcome, that;
				 this.tries++;
				 
				 this.computer = simpletonStrategy();
         this.outcome = game_outcome(player, this.computer);
				 
			   that = this;	 
				 update_score(that);
				 check_winning_conditions(this);	 


			 function game_outcome(player, computer){
				var outcomes = {
					"paper" : {"rock" : "win" , "paper": "tie", "scissors": "lose" },
					"rock" : {"rock" : "tie" , "paper": "lose", "scissors": "win" },
					"scissors" : {"rock" : "lose" , "paper": "win", "scissors": "tie" },
				};

				return outcomes[player][computer];		
			 }
			 
			 function simpletonStrategy(){
				return "paper";		
			}
			 
			 function update_score(rps){
						if (rps.outcome == "win") {
							rps.won++;
							rps.player_money += 10;
							rps.computer_money -= 10;
						}

						if (rps.outcome == "lose"){
							rps.player_money -= 10;
							rps.computer_money += 10;
						}
			 } 
			
			 function check_winning_conditions(rps){
 					if (rps.player_money <= 0 || rps.computer_money <= 0){
						if (rps.player_money <= 0){
							rps.winner = "computer";
						}
						else {
						  rps.winner = "player";
						}

						if (rps.winnmer != ""){
							rps.playing = false;
						}
				 }
			 }
		}
	
