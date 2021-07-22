//-------------------------------------------------------------------------------------------------------
//                                    PRACTICE
//-------------------------------------------------------------------------------------------------------
//   1. Создать интерфейс по такой объект:
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }


// class UserAddressGeo {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: number;
//     geo: {
//         geoLat: number;
//         geoLng: number
//     };
//
//
//     constructor(street, suite, city, zipcode, geoLat, geoLng) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = {
//             geoLat: geoLat,
//             geoLng: geoLng,
//         };
//     }
// }
//
// class UserCompany {
//     name: string;
//     catchPhrase: string;
//     bs: string
//
//
//     constructor(name: string, catchPhrase: string, bs: string) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
//
// function userFn(
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     addressAndGeo: UserAddressGeo,
//     phone: number,
//     website: any,
//     company: UserCompany,
// ) {
// }
//
//
// userFn(
//     1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//
//     new UserAddressGeo(
//         'Kulas Light',
//         'Apt.556',
//         'Gwenborough',
//         92998 - 3874,
//         -37.3159,
//         81.1496),
//     1 - 770 - 736 - 8031,
//     'hildegard.org',
//     new UserCompany(
//         'Romaguera-Crona',
//         'Multi-layered client-server neural-net',
//         'harness real-time e-markets'
//     )
// )


// 1 + 2 завдання


//   2. типизировать эту функцию:
//
// function concat(text1, text2) {
//     return text1 + text2
// }

// function concat(text1: string, text2: string): string {
//     return text1 + text2;
// }
//
// let newConcat = concat('hello ', 'OKTEN');
// console.log(newConcat);


//   3. создать класс юзера с полями name, age, city, status
// и методами:
// getName
// setName
// getAge
// setAge
// getCity
// setCity
// changeStatus
// status boolean


// class User {
//     private name: string;
//     private age: number;
//     private city: string;
//     private status: boolean;
//
//     getName(): string {
//         return this.name;
//     }
//
//     setName(value: string) {
//         this.name = value;
//     }
//
//     getAge(): number {
//         return this.age;
//     }
//
//     setAge(value: number) {
//         this.age = value;
//     }
//
//     getCity(): string {
//         return this.city;
//     }
//
//     setCity(value: string) {
//         this.city = value;
//     }
//
//     changeStatus(value: boolean) {
//         this.status = value;
//     }
//
// }


//   4.   1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal


// interface Animal {
//     typeOfAnimal: string;
//     environment: string;
//     action: () => string;
// }
//
// function actionAnimal(qwer: Animal) {
//     const action = qwer.action()
//     console.log(action)
// }
//
// actionAnimal({
//     typeOfAnimal: 'cat',
//     environment: 'ground',
//     action: function () {
//         return 'running';
//     }
// })
//
// actionAnimal({
//     typeOfAnimal: 'bird',
//     environment: 'sky',
//     action: function () {
//         return 'flying';
//     }
// })
//
// actionAnimal({
//     typeOfAnimal: 'fish',
//     environment: 'water',
//     action: function () {
//         return 'swimming';
//     }
// })

//
//   OR
//

enum Movement {
    FLYING = 'flying',
    RUNNING = 'running',
    SWIMMING = 'swimming'
}
enum Environment {
    GROUND = 'ground',
    SKY = 'sky',
    WATER = 'water'
}

class Animal {
    typeOfAnimal: string;
    environment: Environment;
    action: Movement;
}

class Cat implements Animal {
    typeOfAnimal: string;
    environment: Environment;
    action: Movement.RUNNING;

    constructor(typeOfAnimal: string, environment: Environment, action: Movement.RUNNING) {
        this.typeOfAnimal = typeOfAnimal;
        this.environment = environment;
        this.action = action;
    }

    showInfo(): void {
        console.log(`ця тварина вміє ${this.action}`);
    }
}

class Bird implements Animal {
    typeOfAnimal: string;
    environment: Environment;
    action: Movement.FLYING;

    constructor(typeOfAnimal: string, environment: Environment, action: Movement.FLYING) {
        this.typeOfAnimal = typeOfAnimal;
        this.environment = environment;
        this.action = action;
    }

    showInfo(): void {
        console.log(`ця тварина вміє ${this.action}`);
    }
}

class Fish implements Animal {
    typeOfAnimal: string;
    environment: Environment;
    action: Movement.SWIMMING;

    constructor(typeOfAnimal: string, environment: Environment, action: Movement.SWIMMING) {
        this.typeOfAnimal = typeOfAnimal;
        this.environment = environment;
        this.action = action;
    }

    showInfo(): void {
        console.log(`ця тварина вміє ${this.action}`);
    }
}

let cat = new Cat('cat', Environment.GROUND, Movement.RUNNING);
let bird = new Bird('bird', Environment.SKY, Movement.FLYING);
let fish = new Fish('fish', Environment.WATER, Movement.SWIMMING);

console.log(cat);
console.log(bird);
console.log(fish);

cat.showInfo();
bird.showInfo();
fish.showInfo();

