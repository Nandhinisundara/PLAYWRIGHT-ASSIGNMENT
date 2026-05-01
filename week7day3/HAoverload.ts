class APIClient{
    //method
    sendRequest(endpoint:string):void
    sendRequest(endpoint:string,requestBody:string,requestStatus:boolean):void

    //implement
    sendRequest(endpoint:string,requestBody?:string,requestStatus?:boolean){

    if(requestBody&&requestStatus){
        console.log("Endpoint: " + endpoint + " RequestBody: " + requestBody + " Status: " + requestStatus)
    }
    
    else{
        console.log("Endpoint: " + endpoint)
    }
}
}

let Api=new APIClient()
Api.sendRequest("users/login")
Api.sendRequest("users/login", "body data", true)