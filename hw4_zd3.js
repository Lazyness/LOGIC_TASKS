class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    print() {
        console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
    }
}
class Admin extends User {
    rolePrint() { console.log(`role: ${this.role}`); }
    constructor(...args) {
        super(...args);
        this.role = 'Admin';
    }
    print() {
        super.print();
        this.rolePrint();
    }
}

const admin = new Admin('John', 'Connor', '32');
admin.print();