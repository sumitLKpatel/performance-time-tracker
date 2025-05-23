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
    startMonitoring: (name) => {
        if (currentStart !== null) {
            console.log('An execution is already in progress. Call stopMonitoring() to end it.'.yellow);
            return;
        }
        currentStart = now();
        currentName = name;
        console.log(`Execution started for "${name}".`);
    },

    stopMonitoring: () => {
        if (currentStart === null) {
            console.log('No execution is in progress. Call startMonitoring(name) to begin an execution.'.yellow);
            return;
        }
        const end = now();
        printExecutionTime(currentName, currentStart, end);
        currentStart = null;
        currentName = null;
    },

    /**
     * Wrap a function (sync or async) to automatically
     * monitor its execution time when called.
     * 
     * Usage:
     * const wrappedFunc = track('label', originalFunction);
     * await wrappedFunc(...args);
     */
    track: (name, fn) => {
        return async function (...args) {
            if (currentStart !== null) {
                console.log('Warning: Another execution is already in progress. Overlapping timings may be incorrect.'.yellow);
            }
            currentStart = now();
            currentName = name;
            console.log(`Execution started for "${name}".`);

            try {
                const result = await fn(...args);

                const end = now();

                // Use the 'name' variable directly instead of currentName
                printExecutionTime(name, currentStart, end);

                // Reset after printing
                currentStart = null;
                currentName = null;

                return result;
            } catch (err) {
                currentStart = null;
                currentName = null;
                throw err;
            }
        };
    }

};
