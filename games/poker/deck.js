class Deck {
    constructor() {
        this.deck = this.newSet();
        this.shuffle();
    };

    newSet() {
        let deck = [];
        const suits = ['s', 'h', 'c', 'd'];
        const nums = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                let card = [nums[j],suits[i]].join('');
                this.deck.push([nums[j], suits[i], card])
            };
        };
    };

    shuffle() {
        const { deck } = this;
        let c = deck.length, i;
        while(c){
            i = Math.floor(Math.random() * c--);
            [deck[c], deck[i]] = [deck[i], deck[c]];
        };
        return this;
    };

    deal(){
        return this.deck.pop();
    };

    length(){
        return this.deck.length();
    };
};

module.exports = Deck;

// community cards and hand cards
// Deck.4OfAKind(game.community.concat(player.hand))



class Logic {
    fourOfAKind(cards) {
        const cardsVal = {};
        cards.forEach(card => {
            if (!cardsVal[card[0]]) cardsVal[card[0]] = 0;
            cardsVal[card[0]] += 1;
        });
        return Object.values(cardsVal).some(val => val === 4);
    };

    fullHouse(cards) {
        const cardsVal = {};
        cards.forEach(card => {
            if (!cardsVal[card[0]]) cardsVal[card[0]] = 0;
            cardsVal[card[0]] += 1;
        });
        let tri = false;
        let pair = false;
        Object.values(cardsVal).some(val => {
            if (val === 3) tri === true;
            if (val === 2) pair === true;
        });
        return tri && pair;
    };

    flush(cards) {
        const suitCheck = {};
        cards.forEach(card => {
            if (!suitCheck[card[1]]) suitCheck[card[1]] = 0;
            suitCheck[card[1]] += 1;
        });
        return Object.values(suitCheck).some(s => s >= 5);
    };

    straight(cards) {
        sortedCards = [];
        // quicksort cards according to card number.
        // If in sequence, return sortedCards[4]
        // else if sortedCards[0].number == 1
        // 
        //else return 0
    };
};
            9                         8
        hand type                    A
value = 9000000       +           900000           =  9,900,000
        8000000

        5000000                   


                                        3    2
                                        14  02
                            2 digits    13digits   

100
90
80
-10

A K Q 2 3

A K J 10 9


game{
    
}