module.exports = class CardCombo {
    checkHands(cards) {
        if (this.royalFlush(cards)) return 120;
        else if (this.straightFlush(cards)) return 110;
        else if (this.fourOfAKind(cards)) return 100;
        else if (this.fullHouse(cards)) return 90;
        else if (this.flush(cards)) return 80;
        else if (this.straight(cards)) return 70;
        else if (this.threeOfAKind(cards)) return 60;
        else if (this.twoPairs(cards)) return 50;
        else if (this.pair(cards)) return 40;
        else { return this.highestCard(cards) };
    };

    royalFlush(cards) {
        const countSuites = {};
        cards.forEach(card => {
            if (!countSuites[card[1]]) countSuites[card[1]] = 0;
            countSuites[card[1]] += 1;
        });
        let matchSuites = Object.values(countSuites).some(suites => suites >= 5);
        let res = [];
        let count = 0;
        cards.forEach(card => {
            if (card[0] === 'A' && !res.includes(card[0])) {
                res.push(card[0]);
                count += 1;
            } else if (card[0] === 10 && !res.includes(card[0])) {
                res.push(card[0]);
                count += 1;
            } else if (card[0] === 'J' && !res.includes(card[0])) {
                res.push(card[0]);
                count += 1;
            } else if (card[0] === 'Q' && !res.includes(card[0])) {
                res.push(card[0]);
                count += 1;
            } else if (card[0] === 'K' && !res.includes(card[0])) {
                res.push(card[0]);
                count += 1;
            };
        });
        let royalCheck = false;
        if (count === 5) royalCheck = true;
        return (matchSuites && royalCheck);
    };

    straightFlush(cards) {
        const countSuites = {};
        cards.forEach(card => {
            if (!countSuites[card[1]]) countSuites[card[1]] = 0;
            countSuites[card[1]] += 1;
        });
        let matchSuites = Object.values(countSuites).some(suites => suites >= 5);
        let points = [];
        cards.forEach(card => {
            if (card[0] === 'A') {
                points.push(14)
                points.push(1)
            }
            else if (card[0] === 'J') { points.push(11) }
            else if (card[0] === 'Q') { points.push(12) }
            else if (card[0] === 'K') { points.push(13) }
            else { points.push(card[0]) }
        });
        points = points.sort(function (a, b) { return a - b });
        let flushCheck = false;
        for (let i = 0; i < points.length - 5; i++) {
            let arr = [];
            for (let j = 0; j < points.length - 1; j++) {
                if (points[j] + 1 !== points[j + 1]) {
                    break;
                } else {
                    arr.push(points[j])
                };
                if (arr.length === 5) flushCheck = true;
            };
        };
        return (matchSuites && flushCheck);
    };

    fourOfAKind(cards) {
        const countVal = {};
        cards.forEach(card => {
            if (!countVal[card[0]]) countVal[card[0]] = 0;
            countVal[card[0]] += 1;
        });
        return Object.values(countVal).some(values => values === 4);
    };

    fullHouse(cards) {
        const countVal = {};
        cards.forEach(card => {
            if (!countVal[card[0]]) countVal[card[0]] = 0;
            countVal[card[0]] += 1;
        });
        let tri = false;
        let duo = false;
        Object.values(countVal).forEach(value => {
            if (value === 3) { tri = true };
            if (value === 2) { duo = true };
        });
        return (tri && duo);
    };

    flush(cards) {
        const countSuites = {};
        cards.forEach(card => {
            if (!countSuites[card[1]]) countSuites[card[1]] = 0;
            countSuites[card[1]] += 1;
        });
        return Object.values(countSuites).some(suites => suites >= 5);
    };

    straight(cards) {
        let points = [];
        cards.forEach(card => {
            if (card[0] === 'A') {
                points.push(14)
                points.push(1)
            }
            else if (card[0] === 'J') { points.push(11) }
            else if (card[0] === 'Q') { points.push(12) }
            else if (card[0] === 'K') { points.push(13) }
            else { points.push(card[0]) }
        });
        points = points.sort(function (a, b) { return a - b });
        for (let i = 0; i < points.length - 5; i++) {
            let arr = [];
            for (let j = 0; j < points.length - 1; j++) {
                if (points[j] + 1 !== points[j + 1]) {
                    break;
                } else {
                    arr.push(points[j]);
                };
                if (arr.length === 5) return true;
            };
        };
    };


    threeOfAKind(cards) {
        const countVal = {};
        cards.forEach(card => {
            if (!countVal[card[0]]) countVal[card[0]] = 0;
            countVal[card[0]] += 1;
        });
        return Object.values(countVal).some(values => values === 3);
    };

    twoPairs(cards) {
        const countVal = {};
        cards.forEach(card => {
            if (!countVal[card[0]]) countVal[card[0]] = 0;
            countVal[card[0]] += 1;
        });
        let count = 0;
        Object.values(countVal).forEach(value => {
            if (value === 2) { count += 1 }
        });

        if (count > 1) {
            return true;
        } else {
            return false;
        };
    };

    pair(cards) {
        const countVal = {};
        cards.forEach(card => {
            if (!countVal[card[0]]) countVal[card[0]] = 0;
            countVal[card[0]] += 1;
        });
        let count = 0;
        Object.values(countVal).forEach(value => {
            if (value === 2) { count += 1 };
        });
        if (count === 1) {
            return true;
        } else {
            return false;
        };
    };

    highestCard(cards) {
        let points = [];
        cards.forEach(card => {
            if (card[0] === 'A') { points.push(14) }
            else if (card[0] === 'J') { points.push(11) }
            else if (card[0] === 'Q') { points.push(12) }
            else if (card[0] === 'K') { points.push(13) }
            else { points.push(card[0]) };
        });
        points = points.sort(function (a, b) { return a - b });
        return (points[points.length - 1] + points[points.length - 2]);
    };
};