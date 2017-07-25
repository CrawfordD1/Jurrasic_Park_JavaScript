var Jurrasic_park = function(){
    this.park = [];
}

Jurrasic_park.prototype = {
  numberOfDinoSaurs: function(){
    return this.park.length;
  },
  addDinosaur: function(dinosaur){
    this.park.push(dinosaur);
  },
  removeByType(type){
    for(var i = 0; i<this.park.length; i++){
      if(this.park[i].type === type){
        this.park.splice(i);
      }
    }
  },
  findByOffspring: function(){
    var sortedDinos = [];
    for(dinosaur of this.park){
      if(dinosaur.offspring > 2){
        sortedDinos.unshift(dinosaur);
      }
    }
    return sortedDinos;
  },
  dinosAfterYearOne: function(){
    var total = 0;
    for(dinosaur of this.park){
      total += dinosaur.offspring;
    }
    return total + this.park.length;
  },
  dinosAfterYearTwo: function(){
    var total = 0;
    for(dinosaur of this.park){
      total += (dinosaur.offspring * 2);
    }
    return total + this.park.length;
  }
}

module.exports = Jurrasic_park;