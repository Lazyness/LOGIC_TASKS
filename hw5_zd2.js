function wait() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    })
}
async function f() {
    try {
        let w = await wait();
        console.log(w);
    }
    catch (e) {
        console.error(e);
    } finally {
        console.log('Promise complete');
    }
}

f();