class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
    printRole = function () {
        console.log(this.role);
    }
}

let user = new User("Oleg",21);
let admin = new Admin("Dima", 19, "Лул");

admin.printName();
admin.printRole();