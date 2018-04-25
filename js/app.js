/*
 * Create a list that holds all of your cards
 */

var gameDeck = document.getElementById("deck");
var nodeList = document.querySelectorAll('.card');
var cardList = Array.from(nodeList); //turns nodelist into array
// var currentCard;
var lastCard;
var openCards = [];
var closeCard;
var cardClasses;
var cardSymbol;


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function flipCard(){
    //event listener on the gameboard, listening for clicks on its children 
        gameDeck.addEventListener("click", function(e){
        var currentCard = e.target; 
        //gets classNames of i el inside currentCard
        if (currentCard.className === "card") {  // ← verifies target is desired element
            currentCard.classList.add('open'); //add classes open and show to card on click
            currentCard.classList.add('show'); 
        } 
        //gets classnames (fa) from current card and pushes it into array
        cardSymbol = currentCard.children[0].className;
        openCards.push(cardSymbol);
        console.log(openCards);
        // return cardSymbol
        for (var i = 0; i < openCards.length; i++ ){
            // if (openCards[])
            console.log(openCards.length);
            if(openCards.length === 2){
                // console.log("these cards are the same");
            // } else {
                console.log("2 cards revealed");
                // openCards = [];
                // closeCard(currentCard);
                if(openCards[0] === openCards[1]){
                    console.log("it's a match");
                } 
                // else {
                    // closeCard(currentCard);
                // }
            }
        }
    });
      
} 

function closeCard(card){
       setTimeout(function() { 
            card.classList.remove('show'); 
            card.classList.remove('open'); 
        }, 1000);
}

// function checkCards(arr){
    // console.log(openCards);
    // console.log(openCards);
    // for (var i = 0; i < arr.length; i++ ){

    // }
    // if (arr[0] === arr[1]){
    //     console.log("it's a match");
    // } else {
    //     closeCard(this);
    // }
// }

flipCard();
// checkCards(flipCard);
// shuffle(cardList);

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
