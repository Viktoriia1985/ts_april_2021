function numberArgsFunction(a: number, b: number) {

}

numberArgsFunction(10, 23);


function stringArgsFn(a: string, b: string, c: string) {

}

stringArgsFn('123', 'hello', 'ok10');


class UserType1 {
    name: string; //= 'honey'
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    info(): string {
        return this.name

    }
}


function parametrizationFn(
    str: string,
    num: number,
    truest: boolean,
    user: UserType1,
    arr: any [],
    skills: string [],
    users: { name: string, age: number } []
) {
}

parametrizationFn(
    'okten',
    15,
    true,
    // {name: 'vika', age: 36, status: true},
    new UserType1('vika', 36, true),
    [1, 3, 5, true, ''],
    ['java', 'js'],
    [{name: 'kokos', age: 23}, {name: 'vasya', age: 13}, {name: 'kolya', age: 44}]
)


interface Car {
    model: string;
    power: number;
    producer?: string;
    drive: (a: number) => number
}

function tuningCar(car: Car) {

}

tuningCar({
    model: 'subaru',
    power: 254,
    producer: 'FHI',
    drive: function (a: 30) {
        return 100500;
    }
});

tuningCar({
    model: 'subaru',
    power: 254, drive:
        function (a: 8) {
            console.log('hello');
            return 233;
        }
})

class Subaru implements Car {
    model: string;
    power: number;
    producer: string;
    awd: boolean = true;

    drive(a: number): number {
        return 0;
    }

    constructor(model: string, power: number, producer: string, awd: boolean) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.awd = awd;
    }

    foobar(): void {

    }
}

class Toyota implements Car {
    model: string;
    power: number;
    producer: string;
    price: number;

    drive(a: number): number {
        return 0;
    }

    constructor(model: string, power: number, producer: string, price: number) {
        this.model = model;
        this.power = power;
        this.producer = producer;
        this.price = price;
    }
}

let cars: Car[] = [
    new Subaru('legacy', 165, 'subaru', true),
    new Toyota('camry', 265, 'toyota', 43000)
];


// let firstCar = cars[0] as Subaru;
// firstCar.foobar();
// console.log(firstCar.awd);


//--------------------------------------------------------------------------------
//                  PRIVACY
//--------------------------------------------------------------------------------


class Client {
    private name: string;
    private age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setNewAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        }
    }
}

let client = new Client('vasya', 34);
// client.age= -1000;
client.setNewAge(-100);


//--------------------------------------------------------------------------------------------------------------
//     enum
//--------------------------------------------------------------------------------------------------------------

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

function foobar2(gender) {

}
foobar2('dog');


function foobar3(gender:Gender) {
    console.log(gender);
}

foobar3(Gender.FEMALE)
foobar3(Gender.MALE)





