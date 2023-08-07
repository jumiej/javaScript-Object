///constructor function///
function User(name, age){
    this.name = name
    this.age = age
}

///object using constructor function///
const myPadi = new User("peter", 30)
console.log(myPadi)



///class using constructor function///
class Person {
    constructor(skin, hairColor){
        this.skin = skin
        this.hairColor = hairColor
    }
}

///object using constructor function///
const myPaddi = new Person("black", "grey")
console.log(myPaddi)



///Inheritance///////////////////////

class Animal {
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }

    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor(name, gender, breed){
        super(name, gender)
        this.breed = breed
    }

    speak(){
        console.log(`${this.name} barks` )
    }

}

class Cat extends Animal {
    constructor(name, hairType){
        super(name)
        this.hairType = hairType
    }

    speak() {
        console.log(`i am ${this.name} with ${this.hairType} hair `)
    }
    
}


const marcello = new Dog("marcello", "male", "German")
console.log(marcello)
marcello.speak()

const Rabbiar = new Cat("Rabbiar", "fluffy")
console.log(Rabbiar)
Rabbiar.speak()


class Shape {
    construction (color){
        this.color = color
    }

  // Common method to calculate area (to be overridden by subclasses)

    calculateArea() {
        return 0
    }
}

class Circle extends Shape {
    constructor (color, radius){
        // Call the constructor of the parent class (Shape)
        super(color);
        this.radius = radius
    }

      // Overriding the calculateArea method for rectangles
    calculateCircle() {
        return Math.PI * this.radius *this.radius 
    }
}

class Rectangle extends Shape {
    constructor (color, width, height){
         // Call the constructor of the parent class (Shape)
        super(color);
        this.width = width
        this.height = height
    }

    
    calculateRectangle() {
        return this.width * this.height

        }
    }


    const redCircle  = new Circle ("red", 5)
    const blueRectangle = new Rectangle ("blue", 5, 6)

    console.log ("Area of red circle", redCircle.calculateCircle())
    console.log ("Area of blue rectangle", blueRectangle.calculateRectangle())

///////////////////////////////////////////////////////////
///abstraction/////
class Car {
    constructor(make, model) {
        this.make = make
        this.model = model      
        this.speed = 0
    }

   /// public method for acceleration
    Acceleration () {
        this.speed = 10
        console.log(`Car is acceleration, current speed: is ${this.speed}`)
   }

   ////public method for 
   Brake () {
    this.speed = -5
    console.log(`Car is braking, current spend: is ${this.speed}`)
   }
}

const myCar = new Car(" Toyota", "camry")
myCar.Acceleration()
myCar.Brake()


///Encapsulation/////

class Myself {
    constructor (name, age) {
        let privateName = name
        let privateAge = age
       

        this.getName = () => privateName
        this.getAge = () =>  privateAge
        this.sayHello = () => console.log(`my name is ${privateName} and I am ${privateAge}`)


    }
}

const myMyself = new Myself("Alice", 25)
console.log(myMyself.getName())
console.log(myMyself.getAge())
myMyself.sayHello()

/////////////polymorphism/////////////////
class LowerAnimal {
    constructor (name){
        this.name = name; 
    }

    //method for all lower animals
    makeSound(){
        console.log("some generic sound")
    }
}

 class Horse extends LowerAnimal {
    makeSound(){
        console.log("woof!, woof! ")
    }
 }

 class Rat extends LowerAnimal {
    makeSound(){
        console.log("meow! meow!")
    }
 }

// Using polymorphism
function AnimalSound(animal){
    animal.makeSound
 }

 const myHorse = new Horse("Buddy")
 const FoolishRat = new Rat("Whiskers")

 AnimalSound(Horse)
 AnimalSound(Rat)
 console.log(myHorse)
 console.log(FoolishRat) 
//  console.log(AnimalSound)


/////////////////////////////////////////////Arguments in JavaScript/////////////////////////////////
function Myname() {   
    console.log(arguments[0])
}

Myname("JUMIE")

////checking unkwown length of parameters using argument object//// 

function CheckLength(x){
    // var len = 0
    return arguments.length
}

myLength = CheckLength(1,2,3,4,5,6,7,8)
console.log(myLength)

//Finding the sum of the parameters passed to a function using the arguments object.

function  findN(n) {
    var add = 0;
    for( let i = 0; i < arguments.length; i++) {
        add  = add + arguments[i];
    }
    return add
} 

// findings = [1,2,3,4,5]
let findings = findN(1,2,3,4,5)
console.log(findings)

////The Math Object///
///////random with getting an integer numbers//// 
    const getRandomNumber= (max, min)=>{
        let random = Math.random();
        const randomNumber = Math.floor(random * max) + min;
        return randomNumber
    }

let randomNumbers = getRandomNumber(10,1)
console.log("This number is not stable,it is a random number",randomNumbers)


///////random numbers//// 

const getR = (mix, min) => {
    // let random = Math.random();
    return Math.random() 
}

let getRR = getR(5, 1)
console.log("just random numbers", getRR)

////Pure functions////

const calculate = (observe) =>{
    return observe * 2
}

console.log("observing pure function ish", calculate(15))

const add = (x, y) => x + y
console.log(add(2,4))

///////cloning an object ////

const staff = {
    name: 'john',
    age: 23,
    gender: 'male',
}

let staff2 = Object.assign({}, staff) 
staff2.name  = "Angela"
staff2.gender = "female"
console.log("The name of our new staff is ",staff2)

const profile ={
    name: 'Jumie',
    stack: "frontend",
    hobby: "sleeping",

}
console.log("Her profile is",profile)

const profile2 = {...profile}
profile2.name = "Ojumoola"
profile2.hobby = "reading"
console.log("my profile is ",profile2)


///Promise /////
let promise = new Promise(function(resolve, reject) {
    const x = "Jumie is a successful frontend dev"
    const y = "Jumie is a successful frontend dev"

    if (x === y){
        resolve();
    }else {
        reject();
    }
})

promise.then(function () {
    console.log("she is a successful frontend dev")
}).
catch(function () {
    console.log("some error happened")
})

///higher order functions///

let myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const filterOdd = () => {
    const odd = [];
    for(let i = 0; i < myArr.length; i++) {
       if(myArr[i] % 2 !== 0 ){
        odd.push(myArr[i])
       }
    }
    return odd
}

console.log("This are the odd numbers",filterOdd())

const filterEven = () => {
    const Even = []
    for (let i = 0; i < myArr.length; i++){
        if(myArr[i] % 2 === 0 ){
            Even.push(myArr[i])
        }       
    }
    return Even
}

console.log("This are the even numbers",filterEven())

///combining the two together using higher order functions///
const higherOrder = (myArr, callback) => {
    const filterHigherOrder = []
    for(let i = 0; i < myArr.length; i++) {
        callback(myArr[i]) ? filterHigherOrder.push(myArr[i]) : null;
    }
    return filterHigherOrder
}

function isOdd(x) {
    return x % 2 !== 0
}
console.log("higherOrderFunction isOdd",higherOrder(myArr, isOdd))

function isEven(x) {
    return x % 2 ===0 
}
console.log("higherOrderFunction isEven",higherOrder(myArr, isEven))

// function isGreaterThanFive (x){
//     return x > 5
// }
// console.log("higherOrderFunction isGreaterThanFive",higherOrder(myArr, isGreaterThanFive))

///OR///

console.log("higherOrderFunction isGreaterThanFive",higherOrder(myArr, (x) => x > 5))
console.log("higherOrderFunction isLessThanFive",higherOrder(myArr, (x) => x < 5))


////Example 2///
const justDoWhatISay = (number, callback) => {
    const result = callback(number)
console.log("i have done something to the number", result)
}

const double = (number) => {
    return number * 2 
}
justDoWhatISay(5, double)

const triple = (number) => {
    return number * 3
} 
justDoWhatISay(7, triple)
// console.log( "Double my number",justDoWhatISay(5, double))


///callback//

const message = () => {
    console.log("This message is shown after 2 seconds")
}

setTimeout(message, 2000)

const dataFomServer = (callback) => {
    setTimeout(function () {
        const data = "hello, here is the data";
        callback(data);
    }, 3000)

}

/// callback function//
function processData(data) {
    console.log("Received data:", data);
}
dataFomServer(processData); // Output after 3 seconds: Received: Here is the data!

function toUpperCase(data){
    console.log('Changing my data to Uppercase', data.toUpperCase())
}
dataFomServer(toUpperCase)

///filtering json array in javascript//
const data = [
    {
      name: 'Bob',
      gender: 'male',
      age: 34,
    },
    {
      name: 'Carol',
      gender: 'female',
      age: 36,
    },
    {
      name: 'Ted',
      gender: 'male',
      age: 38,
    },
    {
      name: 'Alice',
      gender: 'female',
      age: 40,
    },
  ];

  const lowerAge = data.filter(ag => ag.age > 37)
  console.log("This are our younger staffs",lowerAge)

  const females = data.filter(females => females.gender === "female")
  console.log("This are our female staffs", females)


  const olderOneInFunction  = data.filter(function(old){
    return old.age > 35
  })
  console.log("This are our older staffs in function form", olderOneInFunction)

const olderOne  = data.filter(old => old.age > 35)
console.log("This are our older staffs", olderOne)

const age$Gender  = data.filter(females => females.age > 37 &&  females.gender === "female")
console.log("This are our older  female staffs with their age", age$Gender)


//Example  2///

let obj = {
    'Students': [{
        "name": "Raj",
        "Age": "15",
        "RollNumber": "123",
        "Marks": "99",
 
    }, {
        "name": "Aman",
        "Age": "14",
        "RollNumber": "223",
        "Marks": "69",
    },
    {
        "name": "Vivek",
        "Age": "13",
        "RollNumber": "253",
        "Marks": "89",
    },
    ]
};
 
const nameAman = obj.Students.filter(name => name.name === "Aman");
console.log("Everybody this is", nameAman);

const distinction = obj.Students.filter(function(dist) {
    return(dist.Marks > 80 )
})
console.log("Our distinction students", distinction)

const checkRollNumber = obj.Students.filter(function(roll$age) {
    return roll$age.RollNumber > 200 && roll$age.Age > 12
})
console.log("checking rolls and age ", checkRollNumber )


// let array = [
//     { id: 3 },
//     { id: -1 },
//     { id: 0 },
//     { id: 15 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
// ]

// const validEntry = array.filter(function (entry) {
//     if(entry.id !== number){
//         return false;
//     }
// })
 


//Data structure and algorithm ///