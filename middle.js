
const middle = function (arr) {
    let midArray = []
    if (arr.length < 3) {
        midArray = [];
    }
    else if (arr.length % 2 === 0) {
        midArray.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);
    }
    else if (arr.length % 2 !== 0) {
        midArray.push(arr[((arr.length - 1) / 2)])
    }
    return midArray
}

module.exports =middle;