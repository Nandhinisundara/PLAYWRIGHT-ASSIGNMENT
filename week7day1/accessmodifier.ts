class Employeesignup{
    //methods
    public ename:string="Hari"
    public eid:string="em65"
    private esalary:number=50000 //only inside class
    protected ephone:number=9698668435

    //method
    printdetails(){
    //if need to call inside this method use this.
    console.log(`the employee details is ${this.ename}:${this.eid}:${this.esalary}:${this.ephone}`)
}

public newmethod() //private not able to acces so create a public with method and access that private name or get and set method 

{
    this.esalary
    this.ephone
}
//get method to read value
public get readData(){
    return this.esalary
    
}
//set method is for modify or update the value
public set writeData(sal:number){
    this.esalary=sal
}
}

let Esign=new Employeesignup  //here it shows only public so  private and protected is not accesible outside class
Esign.printdetails()
Esign.newmethod()// public ne method inside private value put inside here can access
console.log(Esign.readData)
Esign.writeData=80000
console.log(Esign.writeData)