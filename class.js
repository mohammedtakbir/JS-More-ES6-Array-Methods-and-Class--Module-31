// * syntactic sugar
class Instructor{
    name;
    designation = 'web course instructor';
    team = 'web team';
    location; 
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startsupportsession(time){
        console.log(`start the session at ${time}`)
    };
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }
}
// ? create objects
const takbir = new Instructor('takbir', 'narayanganj');
console.log(takbir);
takbir.startsupportsession('9:00PM');
takbir.createQuiz(31);

const solaiman = new Instructor('solayman khan', 'dhaka');
console.log(solaiman)