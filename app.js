const EventEmitter = require('events');
const tutorial = require("./tutorial.js");

console.log("Hello from node.js");
console.log(tutorial.sum(3,5));
console.log(tutorial.PI);

var smo = new tutorial.SomeMathObject();

console.log(smo);

const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (arg) => { console.log("tutorial ["+ arg + "] event has occurred");});

eventEmitter.on("sum", (a1,a2) => { console.log("Sum occurred, result: " + tutorial.sum(a1, a2));});

eventEmitter.emit("tutorial", "aaa");
eventEmitter.emit("sum", 7, 3);

class ExtPerson extends tutorial.Person {
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

const Person = tutorial.Person;

let pedro = new Person("Pedro");
pedro.on("name", () => { console.log("My name is " + pedro.name + " (inline)" );});
pedro.emit("name");

let alvaro = new Person("Alvaro");
alvaro.on("name", () => { tutorial.printMyName(alvaro)});
alvaro.emit("name");

const printMyName = tutorial.printMyName;

let santiago = new Person("Santiago");
santiago.on("name", () => { printMyName(santiago);});
santiago.emit("name");

let christina = new ExtPerson("Christina");
christina.emit("name");

let alice = new ExtPerson("Alice");
alice.emit("name");