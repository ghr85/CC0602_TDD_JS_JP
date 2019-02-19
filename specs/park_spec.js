const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dinosaur
  beforeEach(function () {
    park = new Park('Brassic Park',15)
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
  })

  it('should have a name',function(){
    const actual = park.name_str;
    const expected = 'Brassic Park';
    assert.strictEqual(actual,expected);
  });
  it('should have a ticket price',function(){
    const actual = park.price_int;
    const expected = 15;
    assert.strictEqual(actual,expected);
  });
  it('should have a collection of dinosaurs',function(){

    const actual = park.dino_ary.length;
    const expected = 0;
    assert.strictEqual(actual,expected);
  });
  it('should be able to add a dinosaur to its collection',function(){
    park.add_dino(dinosaur);
    const actual = park.dino_ary.length;
    const expected = 1;
    assert.strictEqual(actual,expected);
  });



  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
