
// This is how we create a model with mongoose, a model => a coolection of records in mongodb

const mongoose = require('mongoose');
// the model is a set of records that are based on a Schema of sort, here we just define  a name to be a string 
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : String
});

// creating te model based on the Schema we defie=nded earlier, the first arguement though is the name of the model (collection)

const User = mongoose.model('user', UserSchema);

module.exports  = User;
// when we use this model OUTSIDE this file we will  create  new instances of that module => new records basically

