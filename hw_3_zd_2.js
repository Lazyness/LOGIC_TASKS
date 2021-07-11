const sarah = {
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
}

function printJobName(sarah) {
    const {
        name: nameUser,
        job: {
            name,
            hiringDate
        }
    } = sarah;

    console.log(name);
}

printJobName(sarah);
