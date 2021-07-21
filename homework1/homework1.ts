class UserAddressGeo {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geoLat: number;
    geoLng: number

    constructor(street: string, suite: any, city: string, zipcode: number, geoLat: number, geoLng: number) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geoLat = geoLat;
        this.geoLng = geoLng;
    }
}

class UserCompany {
    name: string;
    catchPhrase: string;
    bs: string


    constructor(name: string, catchPhrase: string, bs: string) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

function userFn(
    id: number,
    name: string,
    username: string,
    email: string,
    addressAndGeo: UserAddressGeo,
    phone: number,
    website: any,
    company: UserCompany,
) {
}


userFn(
    1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',

    new UserAddressGeo(
        'Kulas Light',
        'Apt.556', 'Gwenborough',
        92998 - 3874,
        -37.3159,
        81.1496),
    1 - 770 - 736 - 8031,
    'hildegard.org',
    new UserCompany(
        'Romaguera-Crona',
        'Multi-layered client-server neural-net',
        'harness real-time e-markets'
    )
)


