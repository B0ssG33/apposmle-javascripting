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

// truthy
// string
// non-zero number
// any object {}
// []


// falsy
// ""
// 0
// false
// null
// undefined
// NaN

const myVar = null

//const newValue = 0 ?? 'hello2' // null undefined
//console.log(myVar && 'hello')
//const newValue = 0 ? 'hello1' : 'hello2' // truthy falsy
// const newValue = [].length > 0 ? 'hello1' : 'hello2' // truthy falsy
// const newValue = Object.keys({}).length > 0 ? 'hello1' : 'hello2' // truthy falsy
// console.log(newValue)

// const person2 = {
//     name: 'John',
//     walk:function() {
//         console.log(`${this.name} Walking...`)
//     }
// }

// const person2 = {
//     name: 'John',
//     walk() {
//         // setTimeout(function(){console.log(`${this.name} is walking new...`)}, 3000)
//         // var self = this
//         // setTimeout(function(){console.log(`${this.name} is walking new...`)}, 3000)

//         setTimeout(() => {console.log(`${this.name} is walking new...`)}, 3000) // lambda
//     }
// }

// person2.walk() // 
// this.name = 'kelly'
// const w = person2.walk // no name, scope is inside only, inside of the function
// w()

// const person2 = {
//     name: 'Juswa',
//     walk: ()=> { //arrow function, if binind mo, same behavior if di mo binind. no scoping, tumatalon sa taas (bind using arrow function), this is used para di ka na magbind
//         // setTimeout(function(){console.log(`${this.name} is walking new...`)}, 3000)
//         // var self = this
//         // setTimeout(function(){console.log(`${this.name} is walking new...`)}, 3000)

//         setTimeout(() => {console.log(`${this.name} is walking new...`)}, 3000) // lambda
//     }
// }

// //person2.walk() // 
// this.name = 'kelly' //eto nakikita nya (bind using arrow function), need mo ideclare para ito makuha nya
// const w = person2.walk.bind(person2) // no name, scope is inside only, inside of the function, solution is to 'bind', pwede ng walang bind if arrow function
// w()

// const tags = ['tag1', 'tag2', 'tag3']

// // const updatedTags = tags.filter(tag => tag.includes('1')) // using filter
// // console.log(updatedTags)
// // console.log(updatedTags[0])

// const updatedTags = tags.find(tag => tag.includes('1')) // using find
// console.log(updatedTags) // no need to indicate to get the value of the array.

const tags = [
    {id:1, value:'tag1'},
    {id:2, value:'tag2'},
    {id:3, value:'tag3'},
]
const updatedTags = tags.find(tag => tag.value.includes('1')) // using find
console.log(updatedTags) // no need to indicate to get the value of the array.