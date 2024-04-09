// index.js
const now = require('performance-now');
require('colors');

let currentStart = null;
let currentName = null;
let counter = 1; // Counter for differentiating between multiple start-stop pairs

function formatTime(time) {
    return time.toFixed(2).toString().padStart(8);
}

function printExecutionTime(name, start, end) {
    const elapsed = end - start;
    const counterStr = `[${counter.toString().green}]`;
    const nameStr = `[${name.green}]`;
    const timeStr = `Execution Time: ${formatTime(elapsed).green} ms`;
    console.log(`${counterStr} ${nameStr} - ${timeStr}`);
    counter++; // Increment the counter for the next measurement
}

module.exports = {
    startMonitoring:  (name) => {
        if (currentStart !== null) {
            console.log('A execution is already in progress. Call stop() to end it.'.yellow);
            return;
        }
        currentStart = now();
        currentName = name;
        console.log(`Execution started for function "${name}".`);
    },
    stopMonitoring: () => {
        if (currentStart === null) {
            console.log('No execution is in progress. Call start(name) to begin a execution.'.yellow);
            return;
        }
        const end = now();
        printExecutionTime(currentName, currentStart, end);
        currentStart = null;
        currentName = null;
    }
};
