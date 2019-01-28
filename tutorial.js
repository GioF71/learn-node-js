const EventEmitter = require('events');

const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
    constructor() {
        console.log('obj created');
    }
}

const printMyName = (person) => { 
    console.log("My name is " + person.name + " (function)");
};

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

module.exports = {Person : Person, sum : sum, printMyName : printMyName, PI : PI, SomeMathObject : SomeMathObject};
