// * Optional chaining is a safe and concise way to perform access checks for nested object properties.

// * The optional chaining operator ?. takes the reference to its left and checks if it is undefined or null. If the reference is either of these nullish values, the checks will stop and return undefined. Otherwise, the chain of access checks will continue down the happy path to the final value.

//? An empty person object with missing optional location information
const person = {}

//? The following will equate to undefined instead of an error
const currentAddress = person.location?.address;
// console.log(currentAddress)

// * Here are all of the use cases for optional chaining:

//? obj?.prop       // optional static property access
//? obj?.[expr]     // optional dynamic property access
//? func?.(...args) // optional function or method call

// * Error Handling with Optional Chaining
// ? Optional chaining is particularly useful when working with API data. If you're not sure whether an optional property exists, you can reach for optional chaining.

// * It's best to use this check when you know that something may not have a value, such as an optional property. If a required value has a nullish check on, it may be silenced with undefined returned instead of returning an error to alert of this issue.

/* const user = [
    {name: 'abul', id: 12, job: 'progeammer'}
] */
// console.log(user[0].job)

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job:'leader'},
        {id: 2, name: 'habul', job:'leader'}
    ]
}
// console.log(data.data[1].name)

const user = {
    id: 50001,
    name: 'Colombus',
    address: {
        street: {
            first: '35/A kuchupara lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantontment',
        city: 'dhaka'
    }
}
console.log(user.address.stret?.second ?? 'no street found'); // *The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.