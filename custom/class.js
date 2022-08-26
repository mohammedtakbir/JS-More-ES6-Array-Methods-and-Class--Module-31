/* class Instructor{
    name;
    location;
    constructor(n, l){
       this.name = n;
       this.location = l;
    }
    designation = 'web course instructor';
    team = 'web team'
    startSupportSession = (time) => {
        console.log(`start the support session ${time}`)
    }
}
const takbir = new Instructor('takbir', 'narayanganj');
// console.log(takbir);
takbir.startSupportSession('9PM')
// const abul = new Instructor('abul', 'dhaka')
// console.log(abul); */

class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor';
    team = 'web instructor team';
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the session at ${time}`)
    };
    createQuiz(module){
        console.log(`create quiz for modukle ${module}`)
    }
}
const abul = new Instructor('abul', 'noyahali');
console.log(abul)
abul.startSupportSession('11Am');
abul.createQuiz(33)

class JobPlacement extends TeamMember{
    region;
    designation = 'job placement commandos';
    team = 'job placement';
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
const babul = new JobPlacement('babul', 'Bbaria', 'BD');
// console.log(babul)
