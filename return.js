function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
}

// add(50, 50);
// var total = add(50, 50);
// console.log('total', total);

// function bringIcecrim(money){
//     var icecrimPrice = 20;
//     var quantity = money /icecrimPrice;
//     return quantity;

// }

// var taka = 2000;
// var icecrim = bringIcecrim(taka);
// console.log('give me', icecrim, 'icecrim')

function num(num1, num2, num3){
    const sum = num1 + num2 + num3 / 3;
    return sum;
}


const result1 = num(58, 57, 51);
const result2 = num(60, 58, 53);
const result3 = num(59, 56, 54);
const finalResult = num(result1, result2, result3)
console.log(finalResult);

