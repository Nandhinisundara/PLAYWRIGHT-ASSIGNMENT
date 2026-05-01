"use strict";
/*
Overriding
Create a parent class Browser with a method browserVersion().
Create a child class Chrome that overrides browserVersion() and prints a specific browser version.
*/
class Browser {
    browserVersion() {
        console.log("browserVersion is v.66");
    }
}
class Chrome extends Browser {
    browserVersion() {
        console.log("browserVersion is v.68");
        super.browserVersion();
    }
}
let objchr = new Chrome();
objchr.browserVersion();
