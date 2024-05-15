const removeFromArray = function(list, ...target) {
    return list.filter((x) => {return !(target.includes(x))});
};

// Do not edit below this line
module.exports = removeFromArray;
