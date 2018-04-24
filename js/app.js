/*
 * Create a list that holds all of your cards
 */

var gameDeck = document.getElementById("deck");
console.log(gameDeck);
//returns node list
var cardList = document.querySelectorAll('.card');
var currentCard;


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

//event listener on the gameboard, listening for clicks on its children 
gameDeck.addEventListener("click", function(e){
        currentCard = e.target; 
     if (currentCard.nodeName === 'LI') {  // ← verifies target is desired element
        // console.log('LI with class clicked ' + currentCard.className);
        if (currentCard.classList.contains('open')){
            console.log("open card");
        } else {
            currentCard.classList.add('open');
            currentCard.classList.add('show');

        }

    }

});

    //loops over list of cards
    // for(var i =0; i < cardList.length; i++){
        // console.log("my card is " + i);
    // }

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
