const Park = function (name, price) {
  this.name_str = name;
  this.price_int = price;
  this.dino_ary = [];
}

Park.prototype.add_dino = function(dinosaur){
  this.dino_ary.push(dinosaur);
};
module.exports = Park;
