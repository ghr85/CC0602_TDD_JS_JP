const Park = function (name, price) {
  this.name_str = name;
  this.price_int = price;
  this.dino_ary = [];
}

Park.prototype.add_dino = function(dinosaur){
  this.dino_ary.push(dinosaur);
};

Park.prototype.remove_dino = function(dinosaur){
  const deleteIndex = this.dino_ary.indexOf(dinosaur);
  this.dino_ary.splice(deleteIndex,1)
  return `${dinosaur.species} removed from Park`
};


Park.prototype.has_dino = function(dinosaur){
  return this.dino_ary.includes(dinosaur);
};

Park.prototype.popular_dino = function(){
   let temp_dino_ary = this.dino_ary.map(x => x)
  temp_dino_ary.sort(function (a, b) {
  return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
});
return temp_dino_ary[0];
};


module.exports = Park;
