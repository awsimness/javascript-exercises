const repeatString = function(string,repeat) {
    let finalString=''

    if (repeat<0) {
        return "ERROR"
    }
    else {
        for (i=0;i<repeat;i++) {
            finalString=finalString.concat(string)
        }
        return finalString
    }
};

// Do not edit below this line
module.exports = repeatString;
