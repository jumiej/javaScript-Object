///Object literal///

const person ={ 
    name: 'John',
     age:20,
     color:"white"

 };
 ///Adding New Properties///
person.Nationality = "canada";

///Deleting Properties
delete person.age


///converting Object into an array///
const myArray = Object.values(person)

///empty JavaScript object///

 const person2 = {}
 person2.name = 'Lanre';
 person2.age = 25;
 person2.color = 'black'; 

 ///Deleting Properties
// delete person2.name

///Nested Objects

const person3 ={ 
    name: 'Mide',
    age:23,
    color:"black",
    cloths: {
        cloth1: "shirt",
        cloth2: "trouser", 
        cloth3: "blazer"
    }
 };

/// Setter and Getter///
///Setter
const student = {
    firstName: "Mosh",
    set changeName(NewName){
        this.firstName = NewName;
    }
}

student.changeName = "Peter";

const studentA = {
    firstName: "Johnny",
    lastName: "Doe",
    language: "english",
    set lang(lang) {
        this.language = lang;
    }
}

studentA.lang =  "polish";

///Getter
const student2 = {
    lastName: "stone",
    get getName(){
        return this.lastName
    }
}


///Object Constructors
function   OurStaff(first, last, age, stack) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.position = stack
}

const staff1 = new OurStaff("Daniel", "stone", 25, "product Design")
const staff2 = new OurStaff("peter", "glory", 22, "Frontend developer")
const staff3 = new OurStaff("Orji", "Michael", 21, "Backend developer")
const staff4 = new OurStaff("Gregory", "mars", 28, "Web Developer")


console.log(person)
console.log(person.name  + " "+ "is" + " " + person.age + " "+ " years old");
console.log( "This is an array from object" + myArray)
console.log("just converted my object into an array here" + " " + myArray)
console.log(person2)
console.log(person2.name + " "+ "is a" + " " + person2.color + " " + "guy with nice beards.")
console.log((person2.name + " "+ "is a" + " " + person2.color + " " + "guy with nice beards.").toLocaleUpperCase())
console.log(person3)
console.log(person3.cloths.cloth3) // dot notation
console.log(person3["cloths"]["cloth1"])
console.log(student.firstName)
console.log(student2.getName) // accessing getter method
console.log(student2.lastName) // accessing data property
console.log(staff1.stack)
console.log(studentA.lang);


// Logical operator

//////////////// OR  //////////////
/// OR finds first truthy values//

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)
console.log( undefined || null || 0 ) // 0
console.log(  null || 0  ||undefined ) // undefined

let firstName = "";
let lastName = "";
let nickName = "";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

let hour = 9;

const checkOfficeHour = () => {
    if(hour > 18 || hour < 12);
}

console.log("The office is closed")

let  hours = 12;
let isWeekend = false;

const checkWeekend = ()=> {
    if(hours < 9 || hours > 7 || isWeekend);
}
console.log("The office is closed")

//////////////// AND  //////////////
/// AND finds d first falsy values///

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
console.log( false && 3 === 4); // f && f returns false
console.log("Cat" && "Dog"); // t && t returns "Dog"
console.log(false && "Cat"); // f && t returns false
console.log("Cat" && false); // t && f returns false
console.log("" && false); // f && f returns ""
console.log(false && ""); // f && f returns false

const mark =() =>{
    if( ""  && false);
}
console.log(mark);

//////////////// NOT  /////////////
///it convert operands to true/false///
console.log(!true); // false
console.log(!0); // true

console.log(!"I am home") // false
console.log(!!"I am home") // true

console.log(!null); // true
console.log(!!null); // false
