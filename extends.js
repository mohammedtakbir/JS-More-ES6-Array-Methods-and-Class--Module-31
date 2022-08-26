
class TeamMember{
    name; // ? called property or filled
    location; 
    constructor(name, location){    
        this.name = name;
        this.location = location;
    }
    proviteFeedback(){
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember{
    designation = 'web course instructor';
    team = 'web team';
    constructor(name, location){
        super(name, location);
    }
    startsupportsession(time){ // ? called method
        console.log(`start the session at ${time}`)
    };
    createQuiz(module){
        console.log(`create quiz for module ${module}`)
    }   
}

class Developer extends TeamMember{
    designation = 'web course instructor';
    team = 'web team';
    tech;
    constructor(name, location, tech){
        super(name, location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    };
    release(version){
        console.log(`please release the ${version}`)
    }
}

class jobPlacement extends TeamMember{
    designation = 'job placement commandos';
    team = 'job placement';
    region;
    constructor(name, location, region){
        super(name, location)
        this.region = region;
    }
    providedResume(feature){
        console.log(`please develop the ${feature}`)
    };
    prepareStudent(version){
        console.log(`please release the ${version}`)
    }
}

const moti = new Developer('Moti', 'Dhaka', 'Angular');
console.log(moti)
moti.proviteFeedback()