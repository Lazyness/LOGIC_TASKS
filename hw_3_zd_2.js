const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

const {
    name: nameUser,
    job: {
        name,
        hiringDate
    }
} = sarah;

function printJobName() {
    console.log(name);
}

printJobName();
