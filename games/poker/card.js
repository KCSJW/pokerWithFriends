class Card {
    constructor(value, suit) {
        this.suit = suit;
        this.val = value;
        // point is used for scoring if there is a tie. For now, value needs to be a number.
        this.points = this.val * 4 - ['s', 'h', 'c', 'd'].indexOf(this.suit);
    }
    //include toSym if using 11 12 13 for val
}

module.exports = Card;


