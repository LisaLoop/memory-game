
var gameDeck = document.getElementById("source");
var nodeList = document.querySelectorAll('.card');
var cardList = Array.from(nodeList); //turns nodelist into array
var openCards = [];
// var closeCard;
var playerMoveCount =0;
var moveCounter = document.querySelector('.moves');
var refresh = document.querySelector('.restart');


function flipCards(object){
// event listener on the gameboard, listening for clicks on its children 
    object.addEventListener("click", function(e) {
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
            console.log("it's a match");
            openCards[0].classList.add('match');
            openCards[1].classList.add('match');

        } else {
            // console.log("not a match");
            closeCard(openCards[0]);
            closeCard(openCards[1]);

        }
        openCards = [];
    }
    starRating();
}



function scoreBoard(){
    // increase player score
    playerMoveCount += 1;
    moveCounter.innerHTML = playerMoveCount;  
}

function starRating(){
    console.log(playerMoveCount);
    var stars = document.querySelector('.stars');
    var starsArr = Array.from(stars.children); // converts html collection to array
      if (playerMoveCount === 0 && playerMoveCount < 3){
        console.log("show 3 stars")
        
      } else if (playerMoveCount < 4 && playerMoveCount < 5){
        console.log("two stars!"); 
        }    
        else  if (playerMoveCount < 5 && playerMoveCount < 6) {
            console.log("one star");
        } else {
            console.log("no stars!");
        }
}


starRating();

function newGame(){
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
}







