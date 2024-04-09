# Node.js Performance Time Tracker 

This package provides a simple monitoring feature for Node.js applications. It allows you to monitor the execution time of functions and log the results to the console.

 [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Installation

You can install the package using npm:

```bash
npm install performance-time-tracker
```
    
## Usage
```javascript
const {startMonitoring , stopMonitoring} = require('performance-time-tracker');

// Start monitoring a function
startMonitoring('myFunction');

// Call your function here

// Stop monitoring the function
stopMonitoring();
```

## Example
```javascript
const {startMonitoring , stopMonitoring} = require('performance-time-tracker');

function myFunction() {
    startMonitoring('myFunction'); //add your script name as string
    // Your function logic here
    stopMonitoring();
}

myFunction();


//result
//Execution started for function "myFunction".
//[1] [myFunction] - Execution Time:     3.88 ms
```


## License
performance-time-tracker is released under the [MIT License](http://opensource.org/licenses/MIT).
Copyright (c) 2024 [@sumitLKpatel](https://github.com/sumitLKpatel)
