
# Execution Time Measurement for Node.js Functions

A simple and lightweight Node.js utility to measure the execution time of your functions or code blocks. Ideal for benchmarking, profiling, or just keeping an eye on performance.

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green.svg)](https://nodejs.org/)
[![Version](https://img.shields.io/badge/Version-1.0.1-blue.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)]()


 ## Features
* Measure the execution time of individual functions
* Easy to integrate into existing Node.js projects
* Lightweight and efficient
* Provides accurate timing information
* Suitable for performance monitoring and analysis

## Installation

You can install the package using npm:

```bash
npm install performance-time-tracker --save
```
    
## Usage
```javascript
const {startMonitoring, stopMonitoring} = require('performance-time-tracker');

// Start monitoring a function
startMonitoring('myFunction');

// Call your function here

// Stop monitoring the function
stopMonitoring();
```

To measure how long a function or code block takes to run, wrap it between startMonitoring(label) and stopMonitoring().

The label is a name you give the block you're monitoring—this helps identify it in the output.

You can use this for both synchronous and asynchronous functions.

## Example
```javascript
const {startMonitoring, stopMonitoring} = require('performance-time-tracker');

const asyncFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Response after 3 seconds');
        }, 3000);
    });
};

startMonitoring('myFunction'); //give lable (in string) of your function so you can identify

    await asyncFunction();

stopMonitoring();


//result
//Execution started for function "myFunction".
//[1] [myFunction] - Execution Time:     3000.00 ms
```
You can monitor multiple functions sequentially:

```javascript
const {startMonitoring, stopMonitoring} = require('performance-time-tracker');

const asyncFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Response after 3 seconds');
        }, 3000);
    });
};

startMonitoring('myFunction'); //give lable (in string) of your function so you can identify
    await asyncFunction();
stopMonitoring();


const asyncFunction2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Response after 2.5 seconds');
        }, 2500);
    });
};

startMonitoring('response time of myFunction2'); //give lable (in string) of your function so you can identify
    await asyncFunction2();
stopMonitoring();


//result
//Execution started for "myFunction".
//[1] [myFunction] - Execution Time:     3000.00 ms
//Execution started for "response time of myFunction2".
//[2] [response time of myFunction2] - Execution Time:     2500.00 ms
```


## License
performance-time-tracker is released under the [MIT License](http://opensource.org/licenses/MIT).
Copyright (c) 2025 [@sumitLKpatel](https://github.com/sumitLKpatel)
