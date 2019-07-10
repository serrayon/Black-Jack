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
class Player {
    constructor() {
        this.hand = [];
        
    
    }
    handValue(){
       let total =0;
        this.hand.forEach (card => {
            if (card.value === "J"){
                total +=10
            } else if (card.value === "Q"){
                total +=10
            } else if (card.value === "K"){
                total +=10
            } 
            else if(card.value === "A" ){
                total += 11;
            }
            else{
                total += card.value
            }
            
        });
        
        return total;
    }

    pushCard(obj){
        this.hand.push(obj.deal());
    }
    
};

function gameRules() {
    
    if(player1.handValue() > 21) {
        console.log(`Player one BUSTED you lose!`)
        document.getElementById('message').innerHTML =("Player one BUSTED you lose!")
    }   else if(player1.handValue() === 21) {
        document.getElementById('message').innerHTML =("Player one WON!")
        console.log(`Player one WON!`);
    // }   else if(player1.handValue() < 21 && player1.handValue() > dealer.handValue()) {
    //     document.getElementById('message').innerHTML =("Player one WON!")
    //     console.log(`Player one WON!`); 
    }   else if (dealer.handValue() > 21) {
        document.getElementById('message').innerHTML =("Dealer BUSTED!")
        console.log(`Dealer BUSTED!`) 
    }   else if(dealer.handValue() < 21 && dealer.handValue() > player1.handValue()) {
        document.getElementById('message').innerHTML =("Dealer WON!")
        console.log(`Dealer WON!`);
    }
    else if(dealer.handValue()=== player1.handValue()){
        document.getElementById('message').innerHTML =("Game tied")
        console.log("Game tied");
    }
    
 }
//------------event listeners--------//
// for start game on the first page
deck = new Deck();
player1 = new Player();
dealer = new Player();
start();
function start()
{
        
    deck.shuffle();
    player1.pushCard(deck);
    player1.pushCard(deck);
    dealer.pushCard(deck);

    this.handTotal();

}
function handTotal()
{
    
    document.getElementById('player').innerHTML="Player Cards : "+JSON.stringify(player1.hand);
    document.getElementById('dealer').innerHTML="Dealer Cards : "+JSON.stringify(dealer.hand);
    document.getElementById('player-score').innerHTML="Player Score : "+player1.handValue();
    document.getElementById('dealer-score').innerHTML="Dealer Score : "+dealer.handValue();

}
function hit()
{
    player1.pushCard(deck);
    this.gameRules(); 
    this.handTotal();
}
function stand()
{
    
    while(dealer.handValue()<17)
    {
        dealer.pushCard(deck);
    }
    this.handTotal();
    this.gameRules();
}

function myButton() {
	location.reload();
};