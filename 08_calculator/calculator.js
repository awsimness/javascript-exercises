const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(arr) {
  let ans=0
	if (arr===[]) {
    return ans
  }
  else {
    for (const number of arr) {
      ans=number+ans
    }
    return ans
  }
};

const multiply = function(arr) {
  let ans=1
  for (integer of arr) {
    ans=ans*integer
  }
  return ans
};

const power = function(base,pwr) {
	return base**pwr
};

const factorial = function(number) {
  let ans=1
	if (number===0) {
    return 1
  }
  else {
    for (i=number;i>0;i--) {
      ans=ans*i
    }
    return ans
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
