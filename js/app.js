
var gameDeck = document.getElementById("source");
var nodeList = document.querySelectorAll('.card');
var cardList = Array.from(nodeList); //turns nodelist into array
var openCards = [];
var playerMoveCount =0;
var moveCounter = document.querySelector('.moves');
var refresh = document.querySelector('.restart');

var timerEl = document.querySelector('span.timer');
var updatedTime = 0;

function myTimer() {
    updatedTime = updatedTime + 1;
    timerEl.innerHTML = updatedTime;
}


function flipCards(object){
// event listener on the gameboard, listening for clicks on its children 
    object.addEventListener("click", function(e) {
        // timer;
        setInterval(myTimer, 1000);
        // console.log("timer is happening "+ timer);

        var currentCard = e.target;
        if (currentCard.className === "card") {  // verifies target is desired element
            currentCard.classList.add('open'); //add classes open and show to card on click
            currentCard.classList.add('show'); 
            openCards.push(currentCard);
            checkCards();
        } 
    });
} 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        //swap each element with a random location
        temporaryValue = array[currentIndex]; 
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue; 
    }

    return array; 
}

function checkCards(){
    if(openCards.length === 2){
        scoreBoard();
        if(openCards[0].children[0].className === openCards[1].children[0].className){
            openCards[0].classList.add('match');
            openCards[1].classList.add('match');
            var matchedSets = document.getElementsByClassName('match');
            if (matchedSets.length === 16){
                // stopTime;
                clearInterval(myTimer);
                console.log("stoptime is happening "+stopTime);

                alert("You won in " + updatedTime + " seconds and " + playerMoveCount + " moves. Congratulations.");
                // clearInterval(myTimer);

            }
        } else {
            closeCard(openCards[0]);
            closeCard(openCards[1]);

        }
        openCards = [];
    }
    starRating();

}

function scoreBoard(){
    // increase player move count
    playerMoveCount += 1;
    moveCounter.innerHTML = playerMoveCount;  
}

var stars = document.querySelector('.stars');
var starsArr = Array.from(stars.children); // converts html collection to array
function starRating(){
    //if less than 4 show 3 stars
  if (playerMoveCount < 8) {
    // if less than 8 show 2 stars
  } else if (playerMoveCount < 10) {
        var firstStar = starsArr[2].children;
        firstStar[0].style.color = 'transparent';
    }
    // if less than 16 show 1 star    
    else if (playerMoveCount < 20) {
        var secondStar = starsArr[1].children;
        secondStar[0].style.color = 'transparent';

    } else {
        //else no stars
        var thirdStar = starsArr[0].children;
        thirdStar[0].style.color = 'transparent';
        alert("Sorry, you lost! Hit the refresh to try again.");
    }
}


starRating();

function newGame(){
    updatedTime = 0;
    //star rating set to 3 stars
    for(var i = 0; i < starsArr.length; i++){
        var newStar = starsArr[i].children;
        newStar[0].style.color = "black";
    }
    // select all the cards
    var cardz = document.querySelector('ul.deck');
    if (cardz){
        //if there's more than 1 deck, remove it - prevents multiple decks
        var deck = document.getElementsByClassName("deck");
        for (var i=0; i < 1; i++){
            deck[i].remove();
        }
    }
    //listens for click on refresh icon
    refresh.addEventListener("click", function() {
   //resets move counter
    playerMoveCount = 0;
    moveCounter.innerHTML = playerMoveCount;
    // flips any open or matched cards closed
    for (var i=0; i < cardList.length; i++){
        cardList[i].classList.remove("show");
        cardList[i].classList.remove("open");
        cardList[i].classList.remove("match");
        }
    });
      
}

function closeCard(card){
       setTimeout(function() { 
            card.classList.remove('show'); 
            card.classList.remove('open'); 
        }, 1000);
}

function init(){ //makes sure dom is loaded before running js
    refresh.addEventListener("click", init);
    newGame();
    var shuffledCards = shuffle(cardList);
    var cards = document.createElement("ul");
    cards.className = "deck";
    for (var i=0; i< shuffledCards.length; i++){
        cards.appendChild(shuffledCards[i]);
    }
    document.getElementById("destination").appendChild(cards); 
    flipCards(cards);
    // clearInterval(myTimer);
   
}







