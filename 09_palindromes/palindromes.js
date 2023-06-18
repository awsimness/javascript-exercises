const palindromes = function (strom) {
    const s1=strom.toLowerCase().replace(/[^a-z]/g, "");
    return s1.split('').reverse().join('')==s1;
};


// Do not edit below this line
module.exports = palindromes;
