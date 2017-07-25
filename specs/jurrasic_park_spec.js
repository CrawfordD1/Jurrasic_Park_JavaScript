// Dinosaur:
// should have a type
// should have a number of offspring per year
// Park:

// enclosure should start empty
// should be able to add dinosaur
// should be able to remove all dinosaurs of a particular type
// should get all the dinosaurs with an offspring count of more than 2

var assert = require('assert');
var Jurrasic_park = require('../jurrasic_park.js');
var Dinosaur = require('../Dinosaur.js');

describe('Jurrasic_Park', function(){

  var park;
  var dinosaur = new Dinosaur('Brontosaurus', 6);
  var dinosaur2 = new Dinosaur('T-rex', 2);


  beforeEach(function(){
    park = new Jurrasic_park();
  });

  it('should start empty', function(){
    assert.strictEqual(park.numberOfDinoSaurs(), 0);
  })

  it('Add dinosaur', function(){
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.numberOfDinoSaurs(), 1);
  })

  it('remove all dinosaurs of a particular type', function(){
    park.addDinosaur(dinosaur);
    park.removeByType('Brontosaurus');
    assert.strictEqual(park.numberOfDinoSaurs(), 0);
  })

  it('get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    var foundDinos = park.findByOffspring();
    assert.strictEqual(foundDinos.length, 1);
  })

  // should be able to calculate number of dinosaurs after year one, starting with 1 dinosaur
  // should be able to calculate number of dinosaurs after year two, starting with 1 dinosaur
  // should be able to calculate number of dinosaurs after year two, starting with 2 dinosaurs

  it('dinosaurs after year one, starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur);
    var total = park.dinosAfterYearOne();
    assert.strictEqual(total, 7);
  })

  it('dinosaurs after year two, starting with 1 dinosaur', function(){
    park.addDinosaur(dinosaur);
    var total = park.dinosAfterYearTwo();
    assert.strictEqual(total, 13);
  })

  it('dinosaurs after year two, starting with 2 dinosaur', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    var total = park.dinosAfterYearTwo();
    assert.strictEqual(total, 18);
  })









})