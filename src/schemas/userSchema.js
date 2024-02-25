import joi from 'joi';

const schema = joi.object({
    username: joi.string()
        .alphanum()
        .min(3)
        .max(17)
        .required(),
    
    password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
        repeat_password: joi.ref('password'),

        access_token: [
            joi.string(),
            joi.number()
        ],
    
    
        email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
    })
        .xor('password', 'access_token')
        .with('password', 'repeat_password');
    
    
    const validation = schema.validate({ username: 'danvei', email: 'dani@gmail.com', password:'p0ov3rt7', repeat_password:'p0ov3rt7' });
    // -> { value: { username: 'abc', birth_year: 1994 } }
    console.log(validation);
    schema.validate({});
    // -> { value: {}, error: '"username" is required' }