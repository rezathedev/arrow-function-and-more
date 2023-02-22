// function sum(a, b=2){
//     const total = a + b;
//     return total
// }

// const result = sum(20)
// console.log(result)

// const add = (a, b) => a + b;

// const result = add(10, 20);
// console.log(result);

// const name = () => "Reza"

// const outPut = name()
// console.log(outPut);

// const fullName = name => name + "Islam"

// const outPut = fullName("Reza ")
// console.log(outPut)

// const add = (a, b, c) => {
//     const sum = a + b;
//     const multiply = a * c;
//     const result = sum + multiply;
//     return result
// }

// const result = add(10, 20,30);
// console.log(result);

// const numbers = [2, 4, 5, 43, 56, 33]

// const numbers2 = [...numbers, 34, 45]
// console.log(numbers2)

// const {age} = {name: "Reza", age: 30, address: "Berlin"}
// console.log (age)

// const [first, second] = [3, 4, 5, 6, 8]
// console.log(first, second)

let reza = `
I am Reza
I live in Berlin
I want to be a developer

`

// console.log(reza)

// const add = (a, b = 10) => a + b;

// const result = add(20);
// console.log(result);

// const isEven = (numbers) => {
//     for (number of numbers){
//         if (number % 2 == 0){
//             arr2.push(number)
//         }
//     }
//     // return number
// }
// let arr2 = []
// let arr = [2, 4, 5, 6, 4, 3]
// const outPut = isEven (arr);
// console.log(arr2)

// const y = x => x*x; const z = y(5);
// console.log(z)

// const [a, b, c, ...r] = [1, 4, 5, 6, 9, 29]
// console.log(r)

// const student = {id: 3, 
//     name: "Reza", 
//     age: 23, 
//     address: {
//         street: "Potsdamer Platz",
//         floor: 5,
//         wing: {
//             side: "left",
//             door: "right",
//         }
//     }

// }

// console.log(student.address.wing.sde?.door)


// find
const numbers = [2, 4, 5, 43, 45, 55];

const makeDouble = numbers.map(x => x*2)
console.log(makeDouble)

const numbers = [3 , 5, 6, , 8 , 0 , 10, 50 , 60]

const bigNumber = numbers.find(number => number > 10)
console.log (bigNumber)

// filter
const numbers = [2, 4, 5, 43, 45, 55];

const makeDouble = numbers.map(x => x*2)
console.log(makeDouble)

const numbers = [3 , 5, 6, , 8 , 0 , 10, 50 , 60]

const evenNumber = numbers.filter(number => number % 2 === 0)
console.log (evenNumber)

// Dot Notation
const student = {
    name: "Reza",
    age: 31,
    body: "healthy",
    location: {
        city: "berlin",
        state: "berlin",
        country: "germany"
    }
}

const city = student.location.city;
console.log(city);

// bracket Notation
const student = {
    name: "Reza",
    age: 31,
    body: "healthy",
    location: {
        city: "berlin",
        state: "berlin",
        country: "germany"
    }
}

const city = student.location.city;
console.log(city);