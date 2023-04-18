const sumAll = function(num1,num2) {
    let sum=0
    if (num1<0||num2<0||!Number.isInteger(num1)||!Number.isInteger(num2)){
        sum='ERROR'
    }
    else if (num2>num1) {
        for (n=num1;n<=num2;n++) {
            sum=n+sum
        }
    }
    else {
        for (n=num2;n<=num1;n++) {
            sum=n+sum
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
