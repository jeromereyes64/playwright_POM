import {test, expect} from '@playwright/test';
const Ajv = require('ajv');

test('API GET Request', async({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');
    const text = await response.text();
    
    //expect assertions
    expect(response.status()).toBe(200);
    expect(text).toContain('Lawson');

    //log data
    console.log(await response.json());
})


test('API POST Request', async ({ request }) => {

    const schema = {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "token": {
                "type": "string"
              }
            },
            "required": [
              "id",
              "token"
            ]
    }

    const response = await request.post('https://reqres.in/api/register', {
        data: 
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });

     // Parse JSON response
     const responseData = await response.json();
    // Validate JSON response against schema
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(responseData);

    //expect assertions
    expect(response.status()).toBe(200);
    // Assert schema validation
    expect(valid).toBe(true);
    
    
    //log data
    console.log(await response.json());

})

test('API PUT Request', async ({ request }) => {

    const response = await request.put('https://reqres.in/api/users/2', {
        data: 
        {
            "name": "morpheus",
            "job": "zion resident"
        }
    });
    
    //expect assertions
    expect(response.status()).toBe(200);

    //log data
    console.log(await response.json());
})