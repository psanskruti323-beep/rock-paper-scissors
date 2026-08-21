const score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0 };

      

       //updateScoreElement();
      

      function playGame(playerMove){
        let computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'Rock'){
            if( computerMove === 'Rock'){
              result = 'Tie';
            }else if (computerMove === 'Paper'){
              result = 'You Lose!';
            }else if ( computerMove === 'Scissors'){
              result = 'You Win!';
            }
        }else if(playerMove === 'Paper'){
            if( computerMove === 'Rock'){
              result = 'You Win!';
            }else if (computerMove === 'Paper'){
              result = 'Tie';
            }else if ( computerMove === 'Scissors'){
              result = 'You Lose!';
            }
        }else if(playerMove === 'Scissors'){
            if( computerMove === 'Rock'){
              result = 'You Lose!';
            }else if (computerMove === 'Paper'){
              result = 'You Win!';
            }else if ( computerMove === 'Scissors'){
              result = 'Tie';
            }
        }

       

        if(result === 'You Win!'){
          score.wins += 1;
        }else if(result === 'You Lose!') {
          score.losses += 1;
        }else if(result === 'Tie'){
          score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

         updateScoreElement();
        
         document.querySelector('.js-result')
        .innerHTML =  `${result}`;

        document.querySelector('.js-moves')
        .innerHTML = `You
         <img src="images/${playerMove}-emoji.png" class="move-icon">
         <img src="images/${computerMove}-emoji.png" class="move-icon"> 
         Computer`

         /*alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`

         );*/

      }

      function updateScoreElement(){
           document.querySelector('.js-score')
           .innerHTML = `Wins:${score.wins}, Losses:${score.     losses}, Ties:${score.ties}`;
      }


      function pickComputerMove(){
        let randomNum = Math.random();
        let computerMove = '';
        
          if(randomNum >=0 && randomNum <=1/3){
             computerMove = 'Rock';
          }else if(randomNum >=1/3 && randomNum <=2/3){
             computerMove = 'Paper';
          }else if(randomNum >=2/3 && randomNum <=1){
             computerMove = 'Scissors';
          }

          return computerMove;
      }
