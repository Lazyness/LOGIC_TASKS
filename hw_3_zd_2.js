
function printJobName({
    name:nameUser,
    job:{
        name,
        hiringDate
    }
}) {
    console.log(name);
}

printJobName({
    name: 'Sarah',
    job: {
        name: 'Andersen',
        hiringDate: '23.07.2020'
    }
});
