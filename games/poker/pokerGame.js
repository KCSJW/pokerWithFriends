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
        this.requiredBet = bigBlind;   // What every player has to contribute when their turn comes.
        this.firstRound = true;
        this.winner;
    }

    runGame(){
        this.dealCards();
        while(this.players.length > 1){
            this.bettingRound();
            this.flop();
            this.bettingRound();
            this.turn();
            this.bettingRound();
            this.river();
            this.bettingRound();
            this.winByCompare(); 
        }
    }

    dealCards(){
        this.players.forEach( player =>{
            player.hand.push(this.deck.deal());
            player.hand.push(this.deck.deal());          
        })
    }

    bettingRound(){
        let currentPlayerPos;
        if(this.firstRound){ //first round specific conditions
            this.players[0].bet = this.smallBlind;
            this.players[1].bet = this.bigBlind;
            currentPlayerPos = 2;
            this.requiredBet = bigBlind;    // Security, shouldn't be needed
        }
        else{
            currentPlayerPos = 0;
        }
        while(this.players[currentPlayerPos].bet < this.requiredBet){ // While not everyone had a chance to make move AND requiredBet is not met.
            // Can we eliminate the first condition by starting at 2?
            // Attempted using the if-else above.
            currentPlayerPos = currentPlayerPos % this.players.length;
            if(this.players.length === 1){
                winByKO();
            }
            this.players[currentPlayerPos].availableMoves()
            if(this.players.bet > this.requiredBet){
                this.requiredBet = this.players.bet;
            }
            if(this.players.hand.length === 0){
                // Player has folded. Remove player
                this.players.splice(currentPlayerPos, 1);
            }
            else{currentPlayerPos ++;}
        }

        // this.players.forEach( player =>{ //Probably bad if players is an object.
        //     // SmallBlind will be player[0]
        //     // BigBlind will be player[1]
        //     player.availablesMoves()

        //     // player.bet use to track player's bet. 
        //         // Needs to be kept separate before end of round.
        //         // Goes into pot when round ends.
            
        // })
        this.firstRound = false;
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

    winByKO(){
        // Winning because everyone else folded.
        this.winner = this.players[0];
    }

    winByCompare(){
        // Game ends. Everyone shows their hand. Highest score wins
    }
    

}

// module.exports = PokerGame;


        // // point is used for scoring if there is a tie. For now, value needs to be a number.
        // this.points = this.val * 4 + ['s', 'h', 'c', 'd'].indexOf(this.suit);