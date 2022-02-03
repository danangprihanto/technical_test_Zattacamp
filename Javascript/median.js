// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted.length % 2 === 0 ? (arrSorted[arrSorted.length/2 -1] + arrSorted[arrSorted.length/2]) / 2 : arrSorted[Math.floor(arrSorted.length/2)];
}

console.log(input.sort((a,b) => a - b ));
console.log(result(input))