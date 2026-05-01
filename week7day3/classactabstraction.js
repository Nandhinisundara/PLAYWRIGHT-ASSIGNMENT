"use strict";
/*
ClassRoom: 1

create abstract class
fill() -> implement
clear()->implement
locator()-> unimplement
frame() -> unimplement

create another concrete class
-> implement methods
-> create object and call the methods
*/
class wrapper {
    //implementmethod
    fill() {
        console.log('open the browser');
    }
    clear() {
        console.log('clear the data');
    }
}
class implement extends wrapper {
    locator() {
        console.log('print the locator');
    }
    frame() {
        console.log('print the frame');
    }
}
let objr = new implement();
objr.fill();
objr.clear();
objr.frame();
objr.locator();
