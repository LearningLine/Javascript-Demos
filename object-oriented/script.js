(function() {
    'use strict';

    // JS is a prototypal language (it is about prototypes)
    // C++, Java, C# are classical languages (they are about classes)

    // var person = {
    //     name: 'Jason',
    //     age: 40,
    //     speak: function() {
    //         console.log('Hi, my name is %s!', this.name);
    //     }
    // };
    //
    // person.speak();

    function makePerson(name, age) {
        return {
            name: name,
            age: age,
            speak: function() {
                console.log('Hi, my name is %s!', this.name);
            }
        };
    }

    var p1 = makePerson('Jason', 40);
    var p2 = makePerson('Alice', 24);

    // Java/C# style:
    //
    // class Person {
    //     public Person(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //
    //     public void speak() {
    //         console.log('...');
    //     }
    // }

    // ES pre 6:
    function Person(name, age) {
        // foo = 'bar';
        this.name = name;
        this.age = age;
    }

    Person.prototype = {
        foo: 'bar',
        speak: function() {
            console.log('Hi, my name is %s!', this.name);
        }
    };

    // ES6:
    //
    // class Person {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //
    //     speak() {
    //         console.log('Hi, my name is %s!', this.name);
    //     }
    // }

    var p3 = new Person('Bob', 28);
    var p4 = new Person('Carol', 32);

    p3.speak();

    // document.getElementById('speak').onclick = p3.speak;
    // document.getElementById('speak').onclick = function() {
    //     p3.speak();
    // };
    document.getElementById('speak').onclick = p3.speak.bind(p3);

    // this.onclick();

    // var personPrototype = {
    //     name: 'anonymous',
    //     age: 21,
    //     speak: function() {
    //         console.log('Hi, my name is %s!', this.name);
    //     }
    // };
    //
    // // personPrototype.speak();
    //
    // var jason = Object.create(personPrototype); // Object.create is in ES5
    // jason.name = 'Jason';
    // jason.age = 40;
    // jason.speak();
})();
