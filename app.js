/**
 * Scoreboard Homework
 * @author Florian Godfrey Link 
 */

//instantiaate the score arrays and the effects/song/images
 var awayScores = [];
 var homeScores = [];
 var effects = ["sounds/charge1.mp3", "sounds/charge2.mp3", "sounds/buildup.mp3"];
 var images = ["images/ups.png", "images/megaphone.png"];
 var song = "sounds/chickendance.mp3";

//accumulate the away score cells into the array instantiated above
 function getAwayScoreArray() {
     var score = document.querySelectorAll("td[name ^= 'awayScore_']")
     for(i=0; i<score.length; i++) {
         awayScores.push(score[i]);
     }
 }

 //accumulate the home score cells into the array instantiated above
 function getHomeScoreArray() {
     var score = document.querySelectorAll("td[name ^= 'homeScore_'")
     for(i=0; i<score.length; i++) {
         homeScores.push(score[i]);
     }
 }

/**
*Sums the inner HTML values for a given set of cells
*@param values the group of cells to be summed
*/

function getTotal(values) {
    var total=0;
    for(var i=0; i<values.length; i++){
        total +=parseInt(values[i].innerHTML);
    }
    return total;
}

/**
*Set up all of the event listeners to increment a run cell and update the totals, and to play sound effects and songs
*/
function initializeListeners() {
    document.querySelector("#addRun").addEventListener("click", function() {
        var team = document.querySelector("#team");
        var inning = document.querySelector("#inning");
        if(team.value == "away"){
            awayScores[inning.value-1].innerHTML++;
            document.querySelector("td[name='awayTotal']").innerHTML = getTotal(awayScores);
        }
        else if(team.value == "home"){
            homeScores[inning.value-1].innerHTML++;
            document.querySelector("td[name='homeTotal']").innerHTML = getTotal(homeScores);
        }
    });

    document.querySelector("#subtractRun").addEventListener("click", function() {
        var team1 = document.querySelector("#team");
        var inning1 = document.querySelector("#inning");
        if(team1.value == "away" && 0<awayScores[inning1.value-1].innerHTML){
            awayScores[inning1.value-1].innerHTML--;
            document.querySelector("td[name='awayTotal']").innerHTML = getTotal(awayScores);
        }
        else if(team1.value == "home" && 0<homeScores[inning1.value-1].innerHTML){
            homeScores[inning1.value-1].innerHTML--;
            document.querySelector("td[name='homeTotal']").innerHTML = getTotal(homeScores);
        }
    });

    document.querySelector("#playSound").addEventListener("click", function() {
        (new Audio(effects[Math.floor(Math.random()*effects.length)])).play();
        document.querySelector("img").src = images[Math.floor(Math.random()*images.length)];
    });

    document.querySelector("#playSong").addEventListener("click", function() {
        (new Audio(song)).play();
        document.querySelector("img").src = "images/sdchicken.jpg";
    });
}

//startup
 getAwayScoreArray();
 getHomeScoreArray();
 initializeListeners();
