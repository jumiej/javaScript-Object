
//Need explanation  this code 
// function performOperation(a, b, cd) {
//     let c = a + b;
//     cd(c);
// }
 
// function printResult(result) {
//     console.log("The result is :" + result);
// }
 
// // will print out 5
// performOperation(2, 3, printResult);


///singleton///
const CookieJar = (function(){
    let cookie = null;
    return{
        getCookie : function(){
            if(!cookie) {
                cookie = "myCookie" 
            }
            return cookie;
        }
    };
})();

const firstCookie = CookieJar.getCookie();
console.log("my first cookie",firstCookie) 

const secondCookie = CookieJar.getCookie();
console.log("my second cookie", secondCookie)

const thirdCookie = CookieJar.getCookie();
console.log("my third cookie", thirdCookie)

////Module pattern///
var ToyStore = (function() {
    //private variable
    var toys = ['Doll', 'Car', 'Building', 'Block']

    //private function 
    function getRandomToy() {
        var randomToy = Math.floor(Math.random() * toys.length)
        return toys[randomToy]
    }

   // public methods 
   return {
    getToy : function() {
        return getRandomToy()
        }
   }
})();

console.log('My Random toys here is',ToyStore.getToy())

const createSupplier = (function() {
    const name = "General Motors"
    const field = "automobile"
    const getSupplierName =  () => name


    return {
        name,
        field,
        getName: () => getSupplierName
    }
})();

const ourName = createSupplier.name;
console.log (ourName)

createSupplier.name
createSupplier.field;
console.log("Our supplier is here",createSupplier)

createSupplier.getName();

