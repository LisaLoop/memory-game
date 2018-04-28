
var gameDeck = document.getElementById("source");
var nodeList = document.querySelectorAll('.card');
var cardList = Array.from(nodeList); //turns nodelist into array
var openCards = [];
var closeCard;
var playerMoveCount =0;

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
        } else {
            console.log("not a match");
            closeCard(openCards[0]);
            closeCard(openCards[1]);

        }
        openCards = [];
    }
}

function scoreBoard(){
    // increase player score
    playerMoveCount += 1;
    var moveCounter = document.querySelector('.moves');
    moveCounter.innerHTML = playerMoveCount;

   
}

function closeCard(card){
       setTimeout(function() { 
            card.classList.remove('show'); 
            card.classList.remove('open'); 
        }, 1000);
}

function init(){ //makes sure dom is loaded before running js
    var shuffledCards = shuffle(cardList);
    var cards = document.createElement("ul");
    cards.className = "deck";
    for (var i=0; i< shuffledCards.length; i++){
        cards.appendChild(shuffledCards[i]);
    }
    document.getElementById("destination").appendChild(cards); 
    flipCards(cards);

}







