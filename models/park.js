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
   let temp_dino_ary = this.dino_ary.slice() //let's make an ary we can mutate slice is neater than map
  temp_dino_ary.sort(function (a, b) { //compares 2 elements and sorts descending
  return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
});
return temp_dino_ary[0];
};

Park.prototype.find_all_dino_species = function(species){
  let temp_dino_ary = this.dino_ary.filter(function(el){
      return el.species == species;
  });
  return temp_dino_ary
};
Park.prototype.remove_all_dino_species = function(species){
  let temp_dino_ary = this.dino_ary.filter(function(el){
      return el.species !== species;
  });
  this.dino_ary = temp_dino_ary;
  return this.dino_ary;
};
Park.prototype.daily_visitor_count = function(){
let count = 0
for (let i = 0; i < this.dino_ary.length; i++){
  count += this.dino_ary[i].guestsAttractedPerDay;
};
return count
};




module.exports = Park;
