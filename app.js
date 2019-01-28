console.log("Hello from node.js");
const tutorial = require("./tutorial.js");
console.log(tutorial.sum(3,5));
console.log(tutorial.PI);

var smo = new tutorial.SomeMathObject();

console.log(smo);

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (arg) => { console.log("tutorial ["+ arg + "] event has occurred");});

eventEmitter.on("sum", (a1,a2) => { console.log("Sum occurred, result: " + tutorial.sum(a1, a2));});


eventEmitter.emit("tutorial", "aaa");
eventEmitter.emit("sum", 7, 3);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

class ExtPerson extends Person {
    constructor(name) {
        super();
        this._name = name;
        this.on("name", () => this.printN());
    }

    printN() { 
        console.log("My name is " + this._name);
    }

    get name() {
        return this._name;
    }
}

//const printMyName = (person) => { console.log("My name is " + person.name + " (function)") };

var pedro = new Person("Pedro");
pedro.on("name", () => { console.log("My name is " + pedro.name + " (inline)" );});
pedro.emit("name");

var alvaro = new Person("Alvaro");
alvaro.on("name", () => { tutorial.printMyName(alvaro)});
alvaro.emit("name");

const printMyName = tutorial.printMyName;

var santiago = new Person("Santiago");
santiago.on("name", () => { printMyName(santiago);});
santiago.emit("name");



var christina = new ExtPerson("Christina");
christina.emit("name");

var alice = new ExtPerson("Alice");
alice.emit("name");