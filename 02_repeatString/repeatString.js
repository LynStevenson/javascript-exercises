const repeatString = function(string, multiplier) {
    if (multiplier < 0) {return "ERROR";}
    let result = "";
    for (let i = 0; i < multiplier; i++){
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
