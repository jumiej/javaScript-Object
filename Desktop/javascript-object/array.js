///Array methods///
// Accessing Array Elements

let groceries = ["garrion", "floatingBerry", "crunchyStick", "terrestrialShrimp" ]

console.log("grocery", groceries[0])
console.log("grocery" ,groceries[3])


// Array Length Property

const len = groceries.length
console.log(len) ///ask question here why it is 4
console.log(groceries[2].length)

// Last element on the Array Items
let last = groceries.length - 1 
console.log("The last on my grocery", last) ///


// Loop Over the Array Items
const toyBox = ['car', 'ball', 'doll', 'train', 'blocks'];

for(i = 0; i < toyBox.length; i++){
    const toy = toyBox[i]

    console.log("playing through my toyBox", toy)

}


//  push///
toyBox.push("puzzle")
// let extraToy = toyBox.push("puzzle");
console.log("new toy alert", toyBox);


groceries.push("sweetener")
console.log( "sweetnerrrr add", groceries)


const num1 = [30, 40, 50, 60, 70, 80]
num1.push(90)
console.log("pushing 90 ", num1)


//Unshift //
toyBox.unshift("scrabble")
console.log ("puzzle add", toyBox)

groceries.unshift("ingredient for marinated garri")
console.log(groceries)


//Pop ///
toyBox.pop("scrabble")
console.log ("puzzle removed", toyBox)

groceries.pop("sweetener")
console.log("sweetener removed", groceries)
 
//Shift //
toyBox.shift()
console.log ("something is shifting in toyBox ", toyBox)

groceries.shift()
console.log("something is shifting in groceries", groceries)

//Slice//
let sliceMe = [1,2,3,4,5,6,7,8,9,10,11,12]
let sliced = sliceMe.slice(3)
let sliced2 = sliceMe.slice(5, 10)
console.log ("i don remove 1,2,& 3", sliced)
console.log ("i don comot 5 to 10 ", sliced2)



// toString() 
const myNumbers = [1, 2, 3, 4, 5]

console.log(myNumbers)

let myNumbersConverted = myNumbers.toString()
console.log("i just converted this guys to sting", myNumbersConverted)
 
const mixed = [1, "hello word", true]
let convert = mixed.toString()
console.log("mibfffgf", convert)



let listedNumber = [2,4,6,8,10]

            for(let x=0;x<listedNumber.length;x++)

            {   let y = listedNumber[x]

                console.log("looped checked",  y.toString(2))

            }


// concat()

const array1 = [ "a","b", "c", "d",];
const array2  = [ "e","f", "h", "g"];
const array3 = array1.concat(array2);
console.log(array3)

const array4 = () => {
    const array1 = [ "a","b", "c", "d",];
    const array2  = [ "e","f", "h", "g"];
    return  array1.concat(array2);
}

console.log(array4())

///Using concat() on sparse arrays///
const array5 = [1, 2, 3, , 5]
const array6 = [6, 7, , , 10]
const array7 = array5.concat(array6)
console.log(array7)

const array8 = () => {
    const array5 = [1, 2, 3, , 5]
    const array6 = [6, 7, , , 10]
    return array5.concat(array6)
}

console.log(array8())


////////////isConcatSpreadable concat//////////////////
const obj = [ 1, 1, 2, 2, 3, 3]
console.log(obj)

const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 3,
  0: 1,
  1: 2,
  2: 99, // ignored by concat() since length is 2
};

let merge = obj.concat(arrayLike)

console.log(merge); 


//Sort//
let randomNumbers = [3,2,6,1,5,4,8,7, 12, 14, 17, 9, 10]
randomNumbers.sort((a,b) => a-b)
console.log("here are my sorted randonNumbers", randomNumbers)


///Reverse///////
randomNumbers.reverse()
console.log ("here are my reversed numbers", randomNumbers)



/// Map, Reduce and Filter ///
///map////
let myRandomNumbers = randomNumbers.map((number ) => number + number).sort((a, b) => a - b )
console.log ("finding addition my random numbers", myRandomNumbers);


// let myRandomNumbers2 = randomNumbers.map((number ) => number * number).sort((a, b) => a -b )
const myRandomNumbers2 = () => {
    return randomNumbers.map((number) => number * number).sort((a, b) => a - b )
}
console.log(myRandomNumbers2());

let doubleCheck = [6,7,8]
const Double = () => {
    let check = doubleCheck.map((a) => a * 2)
    return check
}

console.log("I am double checking something",Double());

///filter///
let checkSieve = [1,2,3,4,5,6,7,8]
const sieve = () => {
    return checkSieve.filter((a) => a % 2 === 0)
}
console.log("getting the even numbers", sieve());

const sieveOdd = () => {
    return checkSieve.filter((a) => a % 2 === 1)
}
console.log("getting the odd numbers", sieveOdd());

///reduce//
const candies = () =>{
    return checkSieve.reduce((accumulator,candy) => accumulator + candy)
}
console.log("adding my candies together", candies());



//////////////////////////////////////////////////////////////
// every()///

// const isBelow = (currentValue ) =>{
//     return currentValue >= 50
// }
// const myArray = [1, 30, 39, 29, 10, 13]
// console.log(myArray.every(isBelow));


//   const isBig = (array) =>{
//     return array >= 10
//   }
//  const myNum =[12, 5, 8, 130, 44]
//   console.log(  myNum.every(isBig))

  ///subset///

//   const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


// const arrayA =[1, 2, 3, 4, 5, 6, 7]
// const arrayB = [5, 7, 6]

// const isSubset = () => {
//     return arrayB.every((Element => arrayA.includes(Element)))
// }
// console.log("this is " + isSubset())

// const age = [30, 40, 50, 60, 70, 80]
// const legalAge = () => {
//     return age.every((ages) => ages > 180)
// }

// console.log("legalAge", legalAge())




// const pet = () => {
//     const num1 = [30, 40, 50, 60, 70, 80]
//     let result =num1.push(90)
//     return result
// }


// console.log("example of push gibrrhrj", pet())


// const addArray = (array, ...element) => {
//     array.push(...element)
//     return array
// }

// myArr = [1, 2, 3, 4,]
// const newMyArr = addArray(myArr, 5, 6, 7, 8)
// console.log("push"+  addArray())
