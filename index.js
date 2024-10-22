// console.log('Hello World from JavaScript')

// var and const

// function testFunction() {
//     //const i = 50
//     console.log('var i:', i)
//     var i = 50
//     let j = 10

//     function insideFunction(){
//         var k = 20
//         const c = 5
//         console.log('k: ', k)
//         console.log('c inside:', c)
//         console.log('i: ', i)
//         console.log('j: ', j)
//     }
//     var i = 60
//     const c = 25
//     //c = 2
//     j = 7

//     console.log('c outside: ', c)
//     insideFunction()

//     //for(let variable of myArray){
//       //  variable = 25
//     //}
// }

// const testFunction = () => { //arrow function, what is arrow function?
//     for(j = 0; j < k; j++){
//         console.log('j', j, 'k', k)
//     }
// }
//const i = need assignment immediately
// let i
//const k = 5
// var k = 5
// testFunction()

const person = {
  name: "John",
  age: 20,
  walk: function () {
    console.log(this.name);
    //return 'inside walk function'
  },
  // walk: => {
  // }
};

//const attr = 'name'
// const attr = 'walk'
// console.log(person.name) //dot operator
// console.log(person[attr]()) //capability of brackets

//let - can reassign
//const - can't reassign
//var - hoist upward

const firstName = "Jose";
const lastName = "Rizal";
const age = 550;

function getName() {
  //return firstName + ' ' + middleInitial + ' ' + lastName
  // const name = `string literal: ${firstName} ${middleInitial} ${lastName}\
  // Next line` //template literal

  const name = `http://localhost:8000/${lastName}loremipsu${age}msamlipsumloremi\
pusumipsumloremloremloremipsumsa\
nlorenipsumsumloremlorem`;

  return name;
}

const middleInitial = "P.";

// console.log(getName())

// ternary operator
const color = "green";
const myNumber = "5050hello";

// const serverNumber = 5
// const equalNumber = serverNumber == myNumber //comparing number in string
// const equalNumberType = serverNumber === Number.parseInt(myNumber)
// const someVar =
// color == 'green'
// color === 'green' //comparison with type, faster to compare

// console.log(equalNumber)
// console.log(equalNumberType)

const equalNumber = Number.parseInt(myNumber);
// const someVar = color === 'green' & console.log('hello') & console.log('hi') & true
// console.log(someVar)

const firstNumber = 8;

// const testNumber = color === 'red' && firstNumber === 8
const testNumber = color === "red" ? 5 : 100; //ternary operator

console.log(testNumber);
//&& = short circuit, & = will execute all
