import {test,expect} from '@playwright/test'


const username='admin'
const password='sooM+H@w1P2P'
const login= `${username}:${password}`
const value=btoa(login)
console.log(value)
let ID:any

test.describe.serial("Execute in serial mode", async()=>{
test('create problem using PW with API',async({request})=>{
let responsebody=await request.post('https://dev231684.service-now.com/api/now/table/problem',
    {
        headers:
        {
            "content-type": "application/json",
            "Authorization" :`Basic ${value}`
        },
        data:
        {
            "description": "Create changerequest using PW API"
        }
    })
let res=await responsebody.json()  //conversing json to object
console.log(res)

let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(201)

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe('Created')

ID=res.result.sys_id
console.log(ID)
})

test('fetch problem using PW with API',async({request})=>{
    let responsebody=await request.get(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,

    {
        headers:
        {
         "content-type":"application/json",
         "Authorization":`Basic ${value}`

        }
    })
let res=await responsebody.json()  //conversing json to object
console.log(res)

let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(200)

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe('OK')


})

test('update problem using PW with API',async({request})=>{
    let responsebody=await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,

    {
        headers:
        {
         "content-type":"application/json",
         "Authorization":`Basic ${value}`

        },
        data:
        {
            "description": "Create problem using PW API is resolved"
        }
    })
let res=await responsebody.json()  //conversing json to object
console.log(res)

let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(200)

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe('OK')


})
test('delete problem using PW with API',async({request})=>{
    let responsebody=await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${ID}`,

    {
        headers:
        {
         "content-type":"application/json",
         "Authorization":`Basic ${value}`

        }
    
    })
//delete return nothibg so not have data in return
let resStatus=responsebody.status()
console.log(resStatus)
expect(resStatus).toBe(204)

let resStatusText=responsebody.statusText()
console.log(resStatusText)
expect(resStatusText).toBe('No Content')
})
})
