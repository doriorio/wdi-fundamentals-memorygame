console.log("connected!");


var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"

    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"

    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped" + cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped" + cardTwo);



function checkForMatch() {
     if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    } else {
        alert("Sorry try again!");
    }
}



function flipCard() {
    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    }



function createBoard() {
    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id', i);
        document.getElementById('game-board').appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }

}


function resetCards() {
    var gameboard = document.getElementById('game-board');
    gameboard.innerHTML = "";
	createBoard();
    }


var button = document.querySelector("button");
button.addEventListener("click" , resetCards);



createBoard();