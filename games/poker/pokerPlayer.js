import Card from "./card";
import pokerGame from "./pokerGame"

module.exports = class PokerPlayer {   
    // Currently good only for single game. 
    // For muliple games, you need to move smallBlind. Track that using Room class?
    constructor(user, money = 10000){
        this.name = user.name;
        this.id = user.id;
        this.seat = seatNumber; //MAYBE use to track prevSmallBlind
        this.bet = 0;
        this.requiredBet = 0;   // Don't think this is needed. It is the same as requiredBet on pokerGame
        this.hand = [];         // Player's 2 cards
        this.money = money,     // Subject to change
        // score: 0,
        // guessed: false,
        // ready: false,
        this.connected = user.connected
    }

    availableMoves(){
        var allInButtonText = "All In!"
        var parButtonText;
        var addButtonText;
        var foldButtonText = "Fold";
        if (this.requiredBet > this.money){
            parButtonText = "";
            addButtonText = "";
        }
        else if(this.requiredBet <= this.bet){
            parButtonText = "Check";
            addButtonText = "Bet"
        }
        else{
            parButtonText = "Call";
            addButtonText = "Raise"
        }
    }

    par(){
        this.money -= (this.requiredBet - this.bet)
        this.bet = this.requiredBet
    }

    add(increase){
        this.money -= (increase + this.requiredBet - this.bet)
        this.bet = increase;
        //Set pokerGame.requiredBet to increase
    }

    fold(){
        this.hand = [];
        // remove player
    }
}

// module.exports = PokerGame;


        // // point is used for scoring if there is a tie. For now, value needs to be a number.
        // this.points = this.val * 4 + ['s', 'h', 'c', 'd'].indexOf(this.suit);