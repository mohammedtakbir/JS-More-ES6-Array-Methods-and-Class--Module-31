const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
// console.log(users[0].name);
const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job:'leader'},
        {id: 2, name: 'habul', job:'leader'}
    ]
}
// console.log(data.data[0].job)

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
const userFloor = user.address?.stret?.second;
console.log(userFloor); 