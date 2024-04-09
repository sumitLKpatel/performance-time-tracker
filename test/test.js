const { startMonitoring, stopMonitoring } = require('../dist/index');



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


fetchData();
