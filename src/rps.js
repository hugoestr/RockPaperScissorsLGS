	function RockPaperScissors(){
			this.reset();
		}

    RockPaperScissors.prototype.reset = function(){
			this.winner = false;
			this.playing = true;
			this.round = 0;
			
			this.player_money = 100;
			this.computer_money = 100;
			this.outcome = "";
		
		  this.match_limit = 2;
		  this.game_limit = 2;
			this.game_bet = 0;

			this.match_losses = 0;
			this.match_wins = 0;

			this.point_losses = 0;
			this.point_wins = 0;

			this.opponents = [ 
			{ name: "Tony",
				play : function(){
					return "paper";					
				}
			},
			{ name: "Mikey",
				play : function(){
					var list = ["rock", "paper", "scissors"];
				 	var index = _.random(0, list.length); 	

					return list[index];
				}
			},
			];

		}

		RockPaperScissors.prototype.playTurn = function(player){
				 this.computer = this.opponents[this.round].play();
         this.outcome = game_outcome(player, this.computer);
				 
				 update_score(this);
				 check_winning_conditions(this);	 


			 function game_outcome(player, computer){
				var outcomes = {
					"paper" : {"rock" : "win" , "paper": "tie", "scissors": "lose" },
					"rock" : {"rock" : "tie" , "paper": "lose", "scissors": "win" },
					"scissors" : {"rock" : "lose" , "paper": "win", "scissors": "tie" },
				};

				return outcomes[player][computer];		
			 }
			 			 
			 function update_score(rps){
						if (rps.outcome == "win") {
							rps.match_wins++;
							rps.player_money += 10;
							rps.computer_money -= 10;
						}

						if (rps.outcome == "lose"){
							rps.match_losses++;
							rps.player_money -= 10;
							rps.computer_money += 10;
						}

					  check_match(rps);
			 }

			function check_match(rps){
				var someone_won = (rps.match_wins   >= rps.match_limit  ||
													 rps.match_losses >= rps.match_limit );

				if (someone_won){
					if (rps.match_wins > rps.match_losses){
						rps.point_wins++;
					} else {
						rps.point_losses++;
					}
					rps.match_wins = 0;
					rps.match_losses = 0;
				}
				 
				check_game(rps);
			}	


			function check_game(rps){
				var someone_won = (rps.point_wins >= rps.game_limit ||
												 rps.point_losses >= rps.game_limit);

				if (someone_won){
					if (rps.point_wins > rps.point_losses){
						rps.player_money += rps.game_bet;
						rps.computer_money -= rps.game_bet;
					} else {
						rps.player_money -= rps.game_bet;
						rps.computer_money += rps.game_bet;
					}
					rps.point_wins = 0;
					rps.point_losses = 0;
				}
			}
		
		  function get_another_oponent(rps){
				rps.computer_money = 100;
				rps.round++;
			}

			 function check_winning_conditions(rps){
 					if (rps.player_money <= 0 || rps.computer_money <= 0){
						if (rps.player_money <= 0){
							rps.winner = "computer";
						}
						else {			
							if ((rps.round + 1) > rps.opponents.length) {
									rps.winner = "player";
									rps.playing = false;
							}else {			
								get_another_oponent(rps);
							}
						}

						if (rps.winner == "computer"){
							rps.playing = false;
						}
				 }
			 }
		}
	
