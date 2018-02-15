const assert  = require('assert');
const User = require('../src/user');//U is in capital bacause  it-s a Cobstructor (object construtor function)

describe('Reading some records',()=>{

    let joe;
     // Because we have already deleted the records with forEach() inside the test_helper.js 
     // we have to create joe before finding it because when the code runs the db is empty
 
      beforeEach((done)=>{
          // Creating a new record which is a new instance of joe

           joe = new User({
                name  : 'Joe'
           });

           // saving it to db
           joe.save().then(()=> done());


      })


    it('Find All Users with the name of Joe', (done)=>{

         //find() is for findding ALL the records that have the same criteria in this case the name of Joe
           User.find({name : 'Joe'}).then((users)=>{

            console.log(users);
            // the output from the console : [ { _id: 5a830c75fc84cc168075e39b, name: 'Joe', __v: 0 } ] // so this is clearly returning an array of sort
              
             assert(users[0]._id.toString() === joe._id.toString());

                   done();
           })

    });
    
    it('Find a user with a particular id', (done)=>{

        //find one single record : the first one
        // User is the collection of records we imported in the first line of this file

          User.findOne({_id: joe._id} ).then((user)=>{
             
            assert(user.name === 'Joe');

                  done();
          })

   });


});