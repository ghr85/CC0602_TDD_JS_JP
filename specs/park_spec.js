const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dinosaur_1
  let dinosaur_2
  let dinosaur_3
  beforeEach(function () {
    park = new Park('Brassic Park',15)
    dinosaur_1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur_2 = new Dinosaur('Stegosaurus', 'herbivore', 28);
    dinosaur_3 = new Dinosaur('Barney', 'omnivore', 1);
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
    park.add_dino(dinosaur_1);
    const actual = park.has_dino(dinosaur_1)
    const expected = true;
    assert.strictEqual(actual,expected);
  });
  it('should be able to remove a dinosaur from its collection',function(){
    park.add_dino(dinosaur_1);
    park.add_dino(dinosaur_2);
    park.remove_dino(dinosaur_1);
    const actual = park.has_dino(dinosaur_1);
    const expected = false;
    assert.strictEqual(actual,expected);

  });


  it('should be able to find the dinosaur that attracts the most visitors', function(){
  park.add_dino(dinosaur_1);
  park.add_dino(dinosaur_2);
  park.add_dino(dinosaur_3);
  const actual = park.popular_dino();
  const expected = dinosaur_1;
  assert.strictEqual(actual,expected);
});

  it('should be able to find all dinosaurs of a particular species', function(){
  park.add_dino(dinosaur_1);
  park.add_dino(dinosaur_2);
  park.add_dino(dinosaur_1);
  const actual = park.find_all_dino_species(dinosaur_1.species);
  const expected = [dinosaur_1, dinosaur_1];
  assert.deepEqual(actual,expected);
});
  it('should be able to remove all dinosaurs of a particular species', function(){
  park.add_dino(dinosaur_1);
  park.add_dino(dinosaur_2);
  park.add_dino(dinosaur_1);
  const actual = park.remove_all_dino_species(dinosaur_1.species);
  const expected = [dinosaur_2];
  assert.deepEqual(actual,expected);
});



});
