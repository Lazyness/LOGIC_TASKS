function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

User.prototype.print = function () {
    console.log(`Name: ${this.firstName}; Last Name: ${this.lastName}; age: ${this.age}`);
};

const user = new User('John', 'Connor', '32');
const igor = new User('Iiiiihaaaar', 'Lol', '12');
user.print();
igor.print();
