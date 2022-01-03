// CLASS

class GentlemanProgrammerToy {
    private  moustachePhrase: string;

    constructor(moustachePhrase: string){
        this.moustachePhrase = moustachePhrase;
    }

    moustachePressed(){
        alert(this.moustachePhrase);
    }
}

const toy = new GentlemanProgrammerToy("Hola soy Gentleman");
const toy2 = new GentlemanProgrammerToy("Hola soy Gentleman 2");

toy.moustachePressed();

// INTERFACE

interface Person {
    name: string;
    lastName: string;
    age: number;
    breath: ()=> void;
}

const person: Person = {
    name: "Gentleman",
    lastName: "Programming",
    age: 29,
    breath: () => {
        console.log("estoy respirando");
    }
};

const sayHi = (person: Person) => {
    console.log(`hola como andas? ${person.name}`);
};

interface FootBallPlayer extends Person{
    preferredFoot: string;
    tshirtNumber: number;
    statistics: FootBallPlayerStatistics;
    /*
    statistics: {
        averageScore: number;
        shootingAccuracy: number;
    }
    */
}

interface FootBallPlayerStatistics {
    averageScore: number;
    shootingAccuracy: number;
}

interface FootBallTeam {
    name: string;
    players: FootBallPlayer[]
}

const player: FootBallPlayer = {
    name: "Gentleman",
    lastName: "Programming",
    age: 29,
    breath: ()=> {
        console.log("estoy respirando");
    },
    preferredFoot: "left",
    tshirtNumber: 10,
    statistics: {
        averageScore: 5,
        shootingAccuracy: 7
    }
};