const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 0 });
    joe.save()
      .then(() => done());
  });

  function assertName(returnedPromise, done) {
    // opeartion is joe.save() in the first example
    returnedPromise // we chain on  a dot then() on the returnedPromise which is just the promise we call the function with
    // when we pase {} to find that means go ahead and grab all the records of the collection and toss them inside an array of sort
      .then(() => User.find({}))
      .then((users) => {
        // users is an arrays of records , and because we lready know that this arrays has 1 single record that we updated its name to ales so the length of the array has to be 1
        assert(users.length === 1);
        assert(users[0].name === 'Alex');
        done();
      });
  }

  it('instance type (means simply RECORD) using set n save', (done) => {
    // This Approach is more SUITABLE when we want to to update some of the props  In DIFFERETNT sTEPS!!  the second appraaoch is rather Direct and straight forward
    
    joe.set('name', 'Alex');//after setting we have to save the updated record otherwise this will not be updated in the database
    assertName(joe.save(), done);// save() is async in nature so it will give birth to a promise
  });

  it('A model instance (means simply RECORD) can update', (done) => {
    assertName(joe.update({ name: 'Alex' }), done);
  });

  it('A model class (means simply COLLECTION of records) can update', (done) => {
    assertName(
      User.update({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('A model class can update one record', (done) => {
    assertName(
      User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
      done
    );
  });

  it('A model class can find a record with an Id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, { name: 'Alex' }),
      done
    );
  });

 /* it('A user can have their postcount incremented by 1', (done) => {
    User.update({ name: 'Joe' }, { $inc: { likes: 10 } })
      .then(() => User.findOne({ name: 'Joe' }))
      .then((user) => {
        assert(user.likes === 10);
        done();
      });
  });*/
});
