interface User {
    id: number,
    name?: string,
    username?: string,
    email?: string,
    addressAndGeo?: UserAddressGeo,
    phone: string,
    website: any,
    company?: UserCompany,
}

interface UserAddressGeo {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
        geoLat: number;
        geoLng: number
    }
}

interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string
}

const user2 = {
    id: 2,
    name: 'Pet Pet',
    username: 'Pet',
    email: 'pet@gmail.com',
    phone: '097 25-56-653',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}
const user1 = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    addressAndGeo: {
        city: 'Kyiv',
        street: 'Kulas Light',
        suite: 'Gwenborough',
        zipcode: 92998 - 3874,
        geo: {
            geoLat: -37.3159,
            geoLng: 81.1496
        }
    },
    phone: '1 -770 - 736 - 8031',
    website: 'hildegard.org',
}

function concat(user1: User, user2: User): User {
    return {...user1, ...user2}
}

const newUser = concat(user1, user2);
console.log(newUser);
