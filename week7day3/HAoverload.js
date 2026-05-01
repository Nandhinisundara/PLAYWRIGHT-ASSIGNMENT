"use strict";
class APIClient {
    //implement
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestBody && requestStatus) {
            console.log("Endpoint: " + endpoint + " RequestBody: " + requestBody + " Status: " + requestStatus);
        }
        else {
            console.log("Endpoint: " + endpoint);
        }
    }
}
let Api = new APIClient();
Api.sendRequest("users/login");
Api.sendRequest("users/login", "body data", true);
