'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;                // скрытая переменная(типа)
    }
    
    surname = 'Bond';
    #patronamic = 'Yurevich';
    
    say = () => {
        console.log(`${this.name}: ${this._age} : ${this.surname} : ${this.#patronamic}`);
    }
    
    get age() {                         // getter
        return this._age;
    }
    
    set age(num) {                      // setter
        if(num > 0){
            this._age = num;
        }
    }
}

const ivan = new User('Ivan', 44);
ivan.age = 23;
ivan.age;
ivan.say();