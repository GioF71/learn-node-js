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
        this.on("name", () => printMyName(this));
        //this.on("name", () => printN());
    }

    printN() { 
        console.log("My name is " + this._name);
    }

    get name() {
        return this._name;
    }
}


var pedro = new Person("Pedro");

const printMyName = (person) => { console.log("My name is " + person.name) };

//pedro.on("name", () => { console.log("My name is " + pedro.name);});
pedro.on("name", () => printMyName(pedro));
pedro.emit("name");

var christina = new Person("Christina");
christina.on("name", () => printMyName(christina));

christina.emit("name");

var alice = new ExtPerson("Alice");
alice.emit("name");