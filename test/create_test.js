// Testing with mocha
const User = require('../src/user');

const assert =  require('assert');

describe('Creating Records', ()=>{

    it('Saves a user to DB', ()=>{
       // creating a new recods called Joe
        const joe = new User({name : 'Joe'});
        joe.save().then(()=>{
            assert(!joe.isNew ) ;// if !joe.isNew means if joe is not new in other words if joe already saved in DB
        });

    //assert( 1+9 === 10);

    })
})