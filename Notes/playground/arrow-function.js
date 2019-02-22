let square = x =>  x * x;
console.log(square(9));

let user = {
    name: 'Mykola',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi, I am ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi, I am ${this.name}`)
    }
};

user.sayHi(1,2,3);