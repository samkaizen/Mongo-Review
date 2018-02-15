const mongoose = require('mongoose');

// establish the connection 

mongoose.connect('mongodb://localhost/users_test');

// what to do when connection established or error

mongoose.connection.once('open',()=>{
    console.log('Connection has been established to the database!!')
} ).on('error', (error)=>{
    console.warn('warning: ', error);

});

// adding up a mocha hook
beforeEach((done)=>{
     // deleting all the records before each mocha test
 mongoose.connection.collections.users.drop(()=>{
                        done();
 }); 

});