// THING 1: global variable
let browser = "Chrome"

// THING 2: function with callback
function checkBrowserVersion(callback) {

    console.log("Checking browser version...")

    // setTimeout 2 seconds
    setTimeout(function() {

        // invoke callback with browser value
        callback(browser)

    }, 2000)
}

// THING 3: callback function
function myCallback(browserValue) {
    console.log("Browser version is: " + browserValue)
}

// THING 4: call function
checkBrowserVersion(myCallback)