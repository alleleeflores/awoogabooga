// Deck of Cards API
const deckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6";

// html variables
const hitButton = document.querySelector("#hit-btn");
const stayButton = document.querySelector("#stay-btn");
const dealerCards = document.querySelector(".dealer-cards");
const dealerSum = document.querySelector("#dealer-sum");
const playerCards = document.querySelector(".player-cards");
const playerSum = document.querySelector("#player-sum");
const playAgainBtn = document.querySelector("#play-again-btn");
const playButton = document.querySelector("#play-btn");


// variable of Deck ID
let deckId;
// variable of total - to keep 21 in tact
let dealerTotal = 0;
let playerTotal = 0;


// function to make a call to the deckUrl endpoint
async function getDeck(){
    const response = await fetch(deckUrl);
    const deckDetails = await response.json();
    deckId = deckDetails.deck_id;
}

getDeck();

// Once they hit play, dealer gets 4 cards, player gets 2
playButton.onclick = async function(){
    const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`;
    const response = await fetch(cardUrl);
    const card = await response.json();
    console.log(card);

    // get cards from the json file
    // var cardDetails = card.cards[0, 1, 2, 3];
    // console.log(cardDetails);

    var images = '';
    for(var i = 0; i < card.length; i++){
        images += `<img src="${card[i].image}" alt="${card[i].value} of ${card[i].suit}">`;
        console.log(images);
        
        // if(card.value === "QUEEN" || card.value === "KING" || card.value === "JACK"){
        //     // if the card is a Queen, King, or Jack, add 10 to the total
        //     dealerTotal += 10;
        // }
        // else if(card.value === "ACE" && (total + 11) <= 21){
        //     // if the card is an Ace and the total is less than 21, the Ace card will be treated as an 11
        //     dealerTotal += 11;
        // }
        // else if (card.value === "ACE"){
        //     // if the card is an Ace and the total is more than 21, the Ace card will be treated as a 1
        //     dealerTotal += 1;
        // }
        // else{
        //     dealerTotal += parseInt(card.value);
        // }
    
        // dealerSum.innerHTML = dealerTotal;
        // console.log(dealerTotal);
    }

    dealerCards.innerHTML = images;

    if(card.value === "QUEEN" || card.value === "KING" || card.value === "JACK"){
        // if the card is a Queen, King, or Jack, add 10 to the total
        dealerTotal += 10;
    }
    else if(card.value === "ACE" && (total + 11) <= 21){
        // if the card is an Ace and the total is less than 21, the Ace card will be treated as an 11
        dealerTotal += 11;
    }
    else if (card.value === "ACE"){
        // if the card is an Ace and the total is more than 21, the Ace card will be treated as a 1
        dealerTotal += 1;
    }
    else{
        dealerTotal += parseInt(card.value);
    }

    dealerSum.innerHTML = dealerTotal;
    console.log(dealerTotal);
    // dealerCards.innerHTML += `<img src="${cardDetails[i].image}" alt="${cardDetails[i].value} of ${cardDetails[i].suit}">` + 
    //                         `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">` +
    //                         `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">` +
    //                         `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`;

    // if(cardDetails.value === "QUEEN" || cardDetails.value === "KING" || cardDetails.value === "JACK"){
    //     // if the card is a Queen, King, or Jack, add 10 to the total
    //     dealerTotal += 10;
    // }
    // else if(cardDetails.value === "ACE" && (total + 11) <= 21){
    //     // if the card is an Ace and the total is less than 21, the Ace card will be treated as an 11
    //     dealerTotal += 11;
    // }
    // else if (cardDetails.value === "ACE"){
    //     // if the card is an Ace and the total is more than 21, the Ace card will be treated as a 1
    //     dealerTotal += 1;
    // }
    // else{
    //     dealerTotal += parseInt(cardDetails.value);
    // }

    // dealerSum.innerHTML = dealerTotal;
}

hitButton.onclick = async function(){
    const cardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;
    const response = await fetch(cardUrl);
    const card = await response.json();

    // get cards from the json file
    const cardDetails = card.cards[0];
    playerCards.innerHTML += `<img src="${cardDetails.image}" alt="${cardDetails.value} of ${cardDetails.suit}">`;

    if(cardDetails.value === "QUEEN" || cardDetails.value === "KING" || cardDetails.value === "JACK"){
        // if the card is a Queen, King, or Jack, add 10 to the total
        playerTotal += 10;
    }
    else if(cardDetails.value === "ACE" && (playerTotal + 11) <= 21){
        // if the card is an Ace and the total is less than 21, the Ace card will be treated as an 11
        playerTotal += 11;
    }
    else if (cardDetails.value === "ACE"){
        // if the card is an Ace and the total is more than 21, the Ace card will be treated as a 1
        playerTotal += 1;
    }
    else{
        playerTotal += parseInt(cardDetails.value);
    }

    if(playerTotal > 21){
        console.log("Player total is over 21.");
    }

    playerSum.innerHTML = playerTotal;
    console.log(playerTotal);
}