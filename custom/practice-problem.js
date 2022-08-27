// * problem 1.1
//? 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map().

// ? using for loop
const numbers = [1, 3, 5, 7, 9];
let even = [];
function getEven(elements) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        even.push(element + 1);
    }
    return even;
}
const result = getEven(numbers);
// console.log(result);

// ? using array.map()
const numbers1 = [1, 3, 5, 7, 9];
const even1 = numbers1.map(elements => elements + 1);
// console.log(even1);

// * problem 1.2
//? You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.

const numbers2 = [33, 50, 79, 78, 90, 101, 30]
const tens = numbers2.filter(element => element % 10 === 0);
// console.log(tens)

// * problem 1.3
//? Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
const numbers3 = [33, 50, 79, 78, 90, 101, 30];
const find = numbers3.find(element => element % 10 === 0);
// console.log(find);


// * problem 2
//? You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

// ? using for loop
const numbers4 = [1, 9, 17, 22];
let add = 0;
for(let i = 0; i < numbers4.length; i++){
    const element = numbers4[i];
    add += element;
}
// console.log(add)

// ? using array.reduce()
const numbers5 = [1, 9, 17, 22];
const reduce = numbers5.reduce((total, current) => total + current, 0);
// console.log(reduce)

// * problem 3
//? Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here?
//? 20 + 15 + 22 = 57 . The output will be 57
//? What are you thinking? Yeah! Do it with for loop. I know you can do it.
//? But! Wait !! Wait !!! Do the same task using array.reduce() method.

//? using for loop
/* const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'souchorita', age: 22}
]
let sum = 0;
for(let i = 0; i < people.length; i++){
    const objects = people[i]
    sum += objects.age;
} */
// console.log(sum)

//? using array.reduce()
const people = [
    {name: 'meena', age: 20},
    {name: 'rina', age: 15},
    {name: 'souchorita', age: 22}
]
let sum1 = 0;
const sum = people.reduce((total, current) => {
    const test = current.age
    sum1 += test
}, 0)
// console.log(sum1)

// * problem 4
//? sumConsole the value of age
const student = {
    name: 'Fredie',
    age: 22
}
// console.log(student.age)
const {age} = student;
// console.log(age)

// * problem 5
//? Console the value of city
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.8',
            city: 'Haydrabad',
            country: 'Indis'
        }
    ]
}
// console.log(data.location[0].city)

// * problem 5
//? ● Console the value of email
//? ● Console the value of address
//? ● Console the value of city
//? ● Console the value of lat
//? ● Console the value of company name

const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
  }
  console.log(user.email);
  console.log(user.address);
  console.log(user.address.city);
  console.log(user.address.geo.lat);
  console.log(user.company.name);