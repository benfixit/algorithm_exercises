// Find pair with given sum in the array
// Given an unsorted array of integers, find a pair with given sum in it.
//e.g
//Input arr = [8, 7, 2, 5, 3, 1], sum = 10
//Output Pair found at index 0 and 2 (8 + 2)
//Output Pair found at index 1 and 4 (7 + 3)
const naiveSolution = (arr, sum) => {
    const arrayLength = arr.length;
    for(let index = 0; index < arrayLength; index++){
        for(let j = index + 1; j < arrayLength; j++){
            if (arr[index] + arr[j] === sum){
                return [index, j]
            }
        }
    }
}

console.log(naiveSolution([8, 7, 2, 5, 3, 1], 10))
console.log(naiveSolution([8, 7, 2, 5, 3, 1], 11))

const betterSolution = (arr, sum) => {
    const arrayObj = arr.reduce((acc, number, index) => {
        acc[number] = index
        return acc
    }, {});

    for(let index = 0; index < arr.length; index++){
        const diff = sum - arr[index];
        if(arrayObj.hasOwnProperty(diff)){
            return [index, arrayObj[diff]]
        }
    }
}

console.log(betterSolution([8, 7, 2, 5, 3, 1], 10))
console.log(betterSolution([8, 7, 2, 5, 3, 1], 11))
