const assert  = require('assert');
const User = require('../src/user');//U is in capital bacause  it-s a Cobstructor (object construtor function)

describe('Deleting a user',()=>{

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


      });

          // model instance is just a RECORD
    it('model Instance remove', (done)=>{

        joe.remove()
        .then(()=>{
            User.findOne({ name : 'Joe'});
            // if joe is removed so it will be null 
        })
        .then((user)=>{
            //we will get the user from previous promise and checki it up!
                  assert(!user); // this means if user is undefined ( does not exist at all) 
                  console.log('user is :', user) // user id undefined
                  done();
        })

    });
    
    // class means the collection itself

    it('class methode remove', (done)=>{
    // Removes a bunch of records with a given criteria
    // here we will remove all the records with name of joe
     User.remove({ name : 'Joe'})
     .then(()=>{
        User.findOne({ name : 'Joe'});
        // if joe is removed so it will be null 
    })
    .then((user)=>{
        //we will get the user from previous promise and checki it up!
              assert(!user); // this means if user is undefined ( does not exist at all) 
              console.log('user is :', user) // user id undefined
              done();
    });

       

   });
   
   it('class methode find and remove', (done)=>{
       // this grabs the first Joe but that is not that unique
    User.findOneAndRemove({ name : 'Joe'})
    .then(()=>{
       User.findOne({ name : 'Joe'});
       // if joe is removed so it will be null 
   })
   .then((user)=>{
       //we will get the user from previous promise and checki it up!
             assert(!user); // this means if user is undefined ( does not exist at all) 
             console.log('user is :', user) // user id undefined
             done();
   });
       

});

it('class methode findByIdAndRemove', (done)=>{

    User.findByIdAndRemove( joe._id)
    .then(()=>{
       User.findOne({ name : 'Joe'});
       // if joe is removed so it will be null 
   })
   .then((user)=>{
       //we will get the user from previous promise and checki it up!
             assert(!user); // this means if user is undefined ( does not exist at all) 
             console.log('user is :', user) // user id undefined
             done();
   });

});





});