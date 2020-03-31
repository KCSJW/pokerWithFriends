let Card = require('./card');


// is Card.val 11 12 13 or "J" "Q" "K"

function assignScore(cards){
    if (royalFlushCheck(cards)) {
        return royalFlushScore(cards);
    } else if (straightFlushCheck(cards)) {
        return straightFlushScore(cards);
    } else if (fourOfAKindCheck(cards)) {
        return fourOfAKindScore(cards);
    } else if (fullHouseCheck(cards)) {
        return fullHouseScore(cards);
    } else if (flushCheck(cards)) {
        return flushScore(cards)
    } else if (straightCheck(cards)) {
        return straightScore(cards)
    } else if (tripleCheck(cards)) {
        return tripleScore(cards)
    } else if (twopairCheck(cards)) {
        return twopairScore(cards)
    } else if (pairCheck(cards)) {
        return pairScore(cards)
    } else {
        return highCardScore(cards)
    }
}

function pairCheck(cards) {
    return numPairs(cards) === 1
}

function twopairCheck(cards) {
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

function tripleCheck(cards) {
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

function fullHouseCheck(cards) {
    return triple(cards) && pair(cards)
}

function fourOfAKindCheck(cards) {
    let values = {};
    cards.forEach(card => {
        if (values[card.val]) {
            values[card.val]++;
        } else {
            values[card.val] = 1;
        }
    })
    let pairs = 0;
    let isFour = false
    Object.values(values).forEach(count => {
        if (count === 4) {
            isFour = true;
        }
    })
    return (isFour)
}

function straightCheck(cards) {
    let acecards = [];
    cards.forEach(card => {
        if (card.val === 14) {
            acecards.push(new Card(1, card.suit));
        }
        acecards.push(card)
    })
    let streak = 1;
    acecards = acecards.sort((a, b) => a-b)
    for (let i = 0; i < acecards.length-1; i++) {
        let card = acecards[i];
        if (card.val + 1 === acecards[i+1].val) {
            streak++;
        } else {
            streak = 1;
        }
    }
    if (streak >= 5) {return true}
    return false;
}

function flushCheck(cards) {
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

function straightFlushCheck(cards) {
    let suits = {};
    // Check if there is a flush, place the cards into an array for straightCheck
    cards.forEach(card => {
        if (suits[card.suit]) {
            suits[card.suit].push(card)
        } else {
            suits[card.suit] = [card]
        }
    })
    // if (!Object.values(suits).some(arr => arr.length >= 5)) {return false}
    // Check the same 5 cards to see if they are a straight
    let isStraightFlush = false;
    Object.values(suits).forEach(arr => {
        if (arr.length >= 5) {
            //Used flag because returning here only returns out of the forEach
            isStraightFlush = straightCheck(arr)
        }
    })
    return isStraightFlush
}

function royalFlushCheck(cards) {
    let suits = {};
    // Check if there is a flush, place the cards into an array for straightCheck
    cards.forEach(card => {
        if (suits[card.suit]) {
            suits[card.suit].push(card)
        } else {
            suits[card.suit] = [card]
        }
    })
    let isStraightFlush = false;
    let isRoyal = false;
    Object.values(suits).forEach(arr => {
        if (arr.length >= 5) {
            isStraightFlush = straightCheck(arr)
            let sortedarr = arr.sort((a,b) => a-b)
            if (sortedarr[0].val === 10 && sortedarr[arr.length-1].val === 14) {isRoyal = true}
        }
    })
    return isStraightFlush && isRoyal
}







// console.log(straightFlushCheck([new Card(10, 'C'), new Card(11,'C'), new Card(12, 'C'), new Card(13, 'C'), new Card(14, 'C')]))
console.log(royalFlushCheck([new Card(10, 'C'), new Card(11,'C'), new Card(12, 'C'), new Card(13, 'C'), new Card(9, 'C')]))

// Scores


