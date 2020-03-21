var john = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function (bill) {
        switch (true) {
            case bill < 50:
                return bill * 0.2;
            case bill < 200:
                return bill * 0.15;
            default:
                return bill * 0.1;
        }
    },
    calcTips: function () {
        this.tips = [];
        this.paidAmounts = [];

        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = this.calcTip(this.bills[i]);
            this.paidAmounts[i] = this.bills[i] + this.tips[i];
        }
    }
}

var mark = {
    bills: [77, 375, 110, 45],
    calcTip: function (bill) {
        switch (true) {
            case bill < 100:
                return bill * 0.2;
            case bill < 300:
                return bill * 0.1;
            default:
                return bill * 0.25;
        }
    },
    calcTips: function () {
        this.tips = [];
        this.paidAmounts = [];

        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = this.calcTip(this.bills[i]);
            this.paidAmounts[i] = this.bills[i] + this.tips[i];
        }
    }
}

console.log(john);
john.calcTips();
console.log(john);

console.log(mark);
mark.calcTips();
console.log(mark);

var averageTip = function (tips) {
    var totalTips = 0;
    for (let i = 0; i < tips.length; i++) {
        totalTips += tips[i];
    }
    return totalTips / tips.length;
}

johnAvgTip = averageTip(john.tips);
markAvgTip = averageTip(mark.tips);

console.log('John\'s average tip : ' + johnAvgTip);
console.log('Mark\'s average tip : ' + markAvgTip);

if (johnAvgTip > markAvgTip) {
    console.log("John paid more tips.");
} else if (johnAvgTip < markAvgTip) {
    console.log("Mark paid more tips.");
} else {
    console.log("Both paid equal tips.");
}