// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// var colors1 = ["purple", "blue", "green", "yellow", "pink"]

// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe a function called rmvShuffle that takes in an array, removes the first item from the array and shuffles the remaining content

describe("rmvShuffle", () => {
    let colors1 = ["purple", "blue", "green", "yellow", "pink"]
    let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(rmvShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(rmvShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// RED

// b) Create the function that makes the test pass.

// const rmvShuffle = (array) => {
//     array.shift()
//     return array
// }

// It passed but I'm Not sure if the resulting array is actually shuffled or if the test is passing solely because it contains the items. My knowledge of js tells me that .shift has removed the first item and nothing else because it did pass, will log and run to see.
// console.log(rmvShuffle(colors2));
// It didn't shuffle the array as I thought *false GREEN*



const rmvShuffle = (array) => {
    array.shift()
    // create a for loop that randomly removes items from the array and then pushes them onto the end of it
    for (let index = 0; index < array.length * 3; index++) {
        let removedValue = array.splice((Math.floor(Math.random() * array.length)), 1)
        // since .splice returns an array we will push the item from removedValue array at index 0
        array.push(removedValue[0])
    }
    return array
}

// The real Green shows itsself
// But I also went down a rabbit hole of shuffling things and generating things that are equally random versus biased and blah blah blah


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
// var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

// describe a function minMax that takes an array of numbers and returns an array of the minimum and maximum numbers in that order
describe("minMax", () => {
    let nums1 = [3, 56, 90, -8, 0, 23, 6]
    let nums2 = [109, 5, 9, 67, 8, 24]
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
 })
})

// RED

// b) Create the function that makes the test pass.
// Create a function minMax that takes an array of numbers and returns an array of the minimum and maximum numbers in that order

const minMax = (array) => {
    // create an array for the min and max values to be pushed into
    let minMaxArray = []
    minMaxArray.push(Math.min(...array), Math.max(...array))
    return minMaxArray
}

//GREEN

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// describe a func called arrCombine that takes in two arrays as arguments and returns one array with no duplicate values
describe("arrCombine", () => {
    let testArray1 = [3, 7, 10, 5, 4, 3, 3]
    let testArray2 = [7, 8, 2, 3, 1, 5, 4]
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(arrCombine(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
 })
})

// RED

// b) Create the function that makes the test pass.

const arrCombine = (oneArray, twoArray) => {
    for (let j = 0; j < twoArray.length; j++) {
        if (oneArray.includes(twoArray[j]) === false ){
            oneArray.push(twoArray[j])
        }
    }
    return oneArray
}

// Currently at red, since the first array has multiple 3's it isn't passing
// Can concat the arrays and then see if it has duplicates, but that might take up more memory?
