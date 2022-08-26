// ? 1. var, let, const 
// ? break up with var


// ? 2. default parameter
/* function calculateSallery(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus
    return total
} */

// ? 3. template string
/* const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Sallery: ${calculateSallery(22000, 0, 0)} </p>
    <p>Numbers: </p>
</div>
` */
// ? 4. arrow function
/* const doubleIt = x => x*2;
const calculateSallery = (salary, tax, bonus) => salary - salary*tax + bonus;
 */
// ? 5. spread operator
const ages = [45, 54, 87, 68, 35, 75];
const newAges = [87,...ages, 45, 25];
// console.log(newAges)

// ? 6. destructuring
const {a, c, ...x} = {a: 34, b: 43, c:23, name: 'musfik al mithun', sallery: 454545};
// console.log(x);
// console.log(a, c);
const [n, m, ...z] = [65, 45, 32, 94, 23];
console.log(z)
console.log(n, m)