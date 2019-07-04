class Cards {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
};

class Deck {
constructor(){
this.suit = ["spades", "diamonds", "clubs", "hearts"];
this.value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
this.cards = this.createDeck();

}
createDeck() {
    let cards = []
    for (let i = 0; i < this.suit.length; i++){
        for (let j = 0; j < this.value.length; j++){
         cards.push({suit: this.suit[i] , value: this.value[j]})
        }
    }
    return cards
}
shuffle() {
    // fisher yates shuffle https://bost.ocks.org/mike/shuffle/
    var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
 }
 deal() {
    return this.cards.pop();
 }
}; 
deck = new Deck();


class Player {
    constructor() {
        this.hand = [];
    
    }
    // handValue(){
    //    let total =0;
    //     this.hand.forEach (card => {
    //         if (card.value === "J"){
    //             total =+10
    //         } else if (card.value === "Q"){
    //             total =+10
    //         } else if (card.value === "K"){
    //             total =+10
    //         } 
    //         else{
    //             total =+ card.value
    //         }
    //     })
    //     return total;
    //}
    //gameRules(){

    //}
};

player1 = new Player();
dealer = new Player();

console.log(player1.hand = player1.hand.concat(deck.deal()));
dealer.hand = dealer.hand.concat(deck.deal());


// function gameRules() {
//     if(player1 > 21) {
//         console.log(`Player one BUSTED you lose!`)
//     }   else if(player1 === 21) {
//         console.log(`Player one WON!`);
//     }   else if(player1 < 21 && player1 > dealer) {
//         console.log(`Player one WON!`); 
//     }   else if (dealer > 21) {
//         console.log(`Dealer BUSTED!`) 
//     }   else if(dealer < 21 && dealer > player1) {
//         console.log(`Dealer WON!`);
//     }   else if(dealer === 17) {
//         (dealer stands) 
//     }   else if (dealer < 16) {
//             (dealer hits)
//  };


//------------event listeners--------//

// for start game on the first page
// one for hit
//one for stand
//one for shuffle