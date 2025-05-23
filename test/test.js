const { startMonitoring, stopMonitoring, track } = require('../dist/index');



function delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Response after 3 seconds');
        }, 3000);
    });
}

async function fetchData() {
    startMonitoring('Fn fetchData')
    const response = await delay();
    stopMonitoring()
}

async function trackData() {
    const wrappedDelayFunction = track('myFunction', delay);
    await wrappedDelayFunction();
}


// fetchData();
trackData();
