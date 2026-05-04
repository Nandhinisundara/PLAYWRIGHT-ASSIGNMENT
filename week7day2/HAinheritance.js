"use strict";
class WebComponent {
    // A constructor that initializes a `selector` property
    //property
    selector;
    constructor(selectName) {
        this.selector = selectName;
        console.log(this.selector);
    }
    //method
    click() {
        console.log('simulating a click');
    }
    focus() {
        console.log('simulating focusing on the component');
    }
}
class Button extends WebComponent {
    //method
    click() {
        console.log('specific to buttons');
    }
}
class TextInput extends WebComponent {
    //property
    value = '';
    enterText(text) {
        this.value = text;
        console.log(this.value);
        console.log('simulating text entry');
    }
}
function testComponents() {
    //object
    let clickobj = new WebComponent('#loginName');
    clickobj.click();
    let buttonobj = new Button('password');
    buttonobj.click();
    let txtobj = new TextInput('#username');
    txtobj.enterText('Nandhini');
}
testComponents();
//
/*
// Base Class
class WebComponent {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  click(): void {
    console.log(`Clicked on ${this.selector}`);
  }

  focus(): void {
    console.log(`Focused on ${this.selector}`);
  }
}

// Button Class (Derived)
class Button extends WebComponent {
  click(): void {
    super.click(); // call parent method
    console.log(`Button specific action on ${this.selector}`);
  }
}

// TextInput Class (Derived)
class TextInput extends WebComponent {
  value: string = "";

  enterText(text: string): void {
    this.value = text;
    console.log(`Entered text '${this.value}' in ${this.selector}`);
  }
}

// Test Function
function testComponents() {
  const btn = new Button("#loginBtn");
  const input = new TextInput("#username");

  btn.click();
  input.focus();
  input.enterText("Sindhu");
}

testComponents();

/*
Output:
Clicked on #loginBtn
Button specific action on #loginBtn
Focused on #username
Entered text 'Sindhu' in #username
*/
