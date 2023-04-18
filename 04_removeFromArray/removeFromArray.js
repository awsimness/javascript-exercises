const removeFromArray = function(arr,...ridOf) {
    for (const rid of ridOf) {
        if (arr.includes(rid)) {
            arr.splice(arr.indexOf(rid),1)
        } 
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
