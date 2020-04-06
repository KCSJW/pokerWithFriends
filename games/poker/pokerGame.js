import Deck from "./deck";
import PokerPlayer from "./pokerPlayer";

module.exports = class PokerGame {   
    // Currently good only for single game. 
    // For muliple games, you need to move smallBlind. Track that using Room class?
    constructor(users, smallBlind = 10){
        this.players = {};  // COPIED FROM PICTIONARY
        users.forEach(user => {
            this.player = new PokerPlayer(user)

            // PLAYER CHARACTER DETERMIN
            // this.players[user.id] = {
            //     seat: seatNumber,  //MAYBE use to track prevSmallBlind
            //     id: user.id,
            //     bet: 0,
            //     // score: 0,
            //     // guessed: false,
            //     // ready: false,
            //     name: user.name,
            //     money: user.money,
            //     connected: user.connected
            // };
        });
        this.deck = new Deck();
        this.pot = 0;
        this.burnpile = [];     // Or we can just destroy the card? Maybe this is not needed.
        this.community = [];    // Common cards on the table
        this.smallBlind = smallBlind;   // Can be made adjustable in future
        this.bigBlind = 2 * smallBlind;     // Always double that of Small Blind
        this.requiredBet = 0;   // What every player has to contribute when their turn comes.
    }

    bettingRound(){

        this.players.forEach( player =>{ //Probably bad if players is an object.
            // SmallBlind will be player[0]
            // BigBlind will be player[1]
            player.availablesMoves()

            // player.bet use to track player's bet. 
                // Needs to be kept separate before end of round.
                // Goes into pot when round ends.
            
        })
    }

    flop(){
        let message = "Flop!"
        this.deck.deal();
        this.community.push(this.deck.deal());
        this.community.push(this.deck.deal());
        this.community.push(this.deck.deal());
        // return this.community;
    }

    turn(){
        let message = "Turn!"
        this.deck.deal();
        this.community.push(this.deck.deal());
        // return this.community;
    }

    river(){
        let message = "River!"
        this.deck.deal();
        this.community.push(this.deck.deal());
        // return this.community;
    }

    

}

// module.exports = PokerGame;


        // // point is used for scoring if there is a tie. For now, value needs to be a number.
        // this.points = this.val * 4 + ['s', 'h', 'c', 'd'].indexOf(this.suit);