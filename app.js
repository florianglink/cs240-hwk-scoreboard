/**
 * Scoreboard Homework
 * @author Florian Godfrey Link 
 */

 var awayScores = [];
 var homeScores = [];

 function getAwayScoreArray() {
     var score = document.querySelectorAll("td[name ^= 'awayScore_']")
     for(i=0; i<score.length; i++) {
         awayScores.push(score[i]);
     }
 }

 function getHomeScoreArray() {
     var score = document.querySelectorAll("td[name ^= 'homeScore_'")
     for(i=0; i<score.length; i++) {
         homeScores.push(score[i]);
     }
 }

 function getScoreTotals() {
     var awayTotal=0;
     var homeTotal=0;
     for(var i=0; i<awayScores.length; i++) {
         awayTotal+=parseInt(awayScores[i].innerHTML);
     }
     for(var i=0; i<homeScores.length; i++) {
         homeTotal+=parseInt(homeScores[i].innerHTML);
     }
     document.querySelector("td[name='awayTotal']").innerHTML = awayTotal;
     document.querySelector("td[name='homeTotal']").innerHTML = homeTotal;
 }

function initializeListeners() {
    
}
 getAwayScoreArray();
 getHomeScoreArray();

 awayScores[1].innerHTML = 1;
 awayScores[2].innerHTML = 1;
 homeScores[1].innerHTML = 3;
 homeScores[2].innerHTML = 2;

 getScoreTotals();
