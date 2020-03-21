bills = [124, 48, 268];

function calculateTip(bill) {
  switch (true) {
    case bill < 50:
      return 0.2 * bill;
    case bill < 200:
      return 0.15 * bill;
    default:
      return 0.1 * bill;
  }
}

tips = new Array();
tips[0] = calculateTip(bills[0]);
tips[1] = calculateTip(bills[1]);
tips[2] = calculateTip(bills[2]);

finalAmounts = new Array();
finalAmounts[0] = bills[0] + tips[0];
finalAmounts[1] = bills[1] + tips[1];
finalAmounts[2] = bills[2] + tips[2];

console.log(tips);
console.log(finalAmounts);
