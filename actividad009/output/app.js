"use strict";
// CLASS
class GentlemanProgrammerToy {
    constructor(moustachePhrase) {
        this.moustachePhrase = moustachePhrase;
    }
    moustachePressed() {
        alert(this.moustachePhrase);
    }
}
const toy = new GentlemanProgrammerToy("Hola soy Gentleman");
const toy2 = new GentlemanProgrammerToy("Hola soy Gentleman 2");
toy.moustachePressed();
const person = {
    name: "Gentleman",
    lastName: "Programming",
    age: 29,
    breath: () => {
        console.log("estoy respirando");
    }
};
const sayHi = (person) => {
    console.log(`hola como andas? ${person.name}`);
};
const player = {
    name: "Gentleman",
    lastName: "Programming",
    age: 29,
    breath: () => {
        console.log("estoy respirando");
    },
    preferredFoot: "left",
    tshirtNumber: 10,
    statistics: {
        averageScore: 5,
        shootingAccuracy: 7
    }
};
