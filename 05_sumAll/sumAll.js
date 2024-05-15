const sumAll = function(lower, upper) {
    if (lower < 0 || upper < 0 || 
        typeof(lower) != "number" || typeof(upper) != "number"){
            return "ERROR";
        }
    let result = 0;
    if (lower > upper){
        let temp = lower;
        lower = upper;
        upper = temp;
    }
    for (let i = lower; i <= upper; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
