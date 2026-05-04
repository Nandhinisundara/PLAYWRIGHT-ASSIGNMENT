/*
2nd Child file
Create class Edge
Create 1 method launchBrowser
create object for Edge
*/
import { Browser } from "./classinheritanceparent.js";
class Edge extends Browser {
    launchBrowser() {
        console.log("edge launchBrowser is created");
    }
}
let Edgeobj = new Edge();
Edgeobj.launchBrowser();
Edgeobj.browserType();
Edgeobj.browserVersion();
