const { fetchBreedDescription } = require('../breedFetcherRefactor');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns a an error if an invalid breed name is entered', (done) => {
    fetchBreedDescription('chicken', (err, desc) => {
      // we expect an error for this scenario (Remember we're calling the callback function with error and desc)
      assert.equal(desc,null);
      assert.equal(err, 'Please enter an appropriate breed name.');

      done();
    });
  });

});