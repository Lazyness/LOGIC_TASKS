
function User(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.print = function () {
        console.log(`Name: ${this.name}, last name: ${this.lastName}, age: ${this.age}`)
    }
}
const user = new User('John', 'Smith', 30);
user.print();