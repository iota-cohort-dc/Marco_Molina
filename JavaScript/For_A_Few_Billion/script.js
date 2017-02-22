function doubleAmount(dollarAmount, days){
    var total = dollarAmount;
    var i = 1;
    while(i < days && days > 1){
        total += total;
        i++;
    }
    return total;
}
console.log(doubleAmount(0.01, 30));

function howManyDays(dollarAmount){
    var total = 0.01;
    var i = 1;
    while(true){
        if (total >= dollarAmount){
            return (i);
        }
        total += total;
        i++;
    }
}
// console.log(howManyDays(Infinity));
