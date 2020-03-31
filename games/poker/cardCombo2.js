import Card from './card'

// is Card.val 11 12 13 or "J" "Q" "K"

function assignScore(cards){

}

function pair(cards) {
    return numPairs(cards) === 1
}

function twopair(cards) {
    return numPairs(cards) === 2;
}

function numPairs(cards) {
    let values = {};
    cards.forEach(card => {
        if (values[card.val]) {
            values[card.val]++;
        } else {
            values[card.val] = 1;
        }
    })
    let pairs = 0;
    Object.values(values).forEach(count => {
        if (count === 2) {
            pairs++;
        }
    })
    return (pairs)
}

function triple(cards) {
    let vals = {};
    cards.forEach(card => {
        if (vals[card.val]) {
            vals[card.val]++;
        } else {
            vals[card.val] = 1;
        }
    })
    return Object.values(vals).some(val => val === 3);
}

function fullHouse(cards) {
    return triple(cards) && pair(cards)
}

function straight(cards) {
    let streak = 0;
    cards = cards.sort((a, b) => a-b)
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        if (card.val + 1 === cards[i+1].val) {
            streak++;
        } else {
            streak = 0;
        }
    }
    if (streak >= 5) {return true}
    return false;
}

function flush(cards) {
    let suits = {};
    cards.forEach(card => {
        let suit = suits[card.suit]
        if (suits[suit]) {
            suits[suit]++;
        } else {
            suits[suit] = 1;
        }
    })
    return Object.values(suits).some(values => values >= 5);
}

function straightFlush(cards) {

}

