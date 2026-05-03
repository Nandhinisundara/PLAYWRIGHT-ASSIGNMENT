"use strict";
class Employeesignup {
    //methods
    ename = "Hari";
    eid = "em65";
    esalary = 50000; //only inside class
    ephone = 9698668435;
    //method
    printdetails() {
        //if need to call inside this method use this.
        console.log(`the employee details is ${this.ename}:${this.eid}:${this.esalary}:${this.ephone}`);
    }
    newmethod() {
        this.esalary;
        this.ephone;
    }
    //get method to read value
    get readData() {
        return this.esalary;
    }
    //set method is for modify or update the value
    set writeData(sal) {
        this.esalary = sal;
    }
}
let Esign = new Employeesignup; //here it shows only public so  private and protected is not accesible outside class
Esign.printdetails();
Esign.newmethod(); // public ne method inside private value put inside here can access
console.log(Esign.readData);
Esign.writeData = 80000;
console.log(Esign.writeData);
