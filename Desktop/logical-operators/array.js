///Array methods///
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


//////////////////////////////////////////////////////////////
const obj = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log(obj)

const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
//////////////////////////////////////////////////////////////

///copyWithin()///



// every()///

const isBelow = (currentValue ) =>{
    return currentValue >= 50
}
const myArray = [1, 30, 39, 29, 10, 13]
console.log(myArray.every(isBelow));


  const isBig = (array) =>{
    return array >= 10
  }
 const myNum =[12, 5, 8, 130, 44]
  console.log(  myNum.every(isBig))

  ///subset///

//   const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


const arrayA =[1, 2, 3, 4, 5, 6, 7]
const arrayB = [5, 7, 6]

const isSubset = () => {
    return arrayB.every((Element => arrayA.includes(Element)))
}
console.log("this is " + isSubset())

const age = [30, 40, 50, 60, 70, 80]
const legalAge = () => {
    return age.every((ages) => ages > 180)
}

console.log("legalAge", legalAge())


const num1 = [30, 40, 50, 60, 70, 80]
const push = (element) => {
    num1.push(90)
    return element > 5
}
console.log("example of push", push())


const addArray = (array, ...element) => {
    array.push(...element)
    return array
}

myArr = [1, 2, 3, 4,]
const newMyArr = addArray(myArr, 5, 6, 7, 8)
console.log("push"+  addArray())
