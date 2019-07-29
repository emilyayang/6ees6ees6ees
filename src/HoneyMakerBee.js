class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super()
  	this.age = 10;
	  this.job = "make honey";
	  this.honeyPot = 0;
  }
  makeHoney () {
	this.honeyPot++;
 }

  giveHoney () {
	this.honeyPot--;
 }
};


// var HoneyMakerBee = function(color, food) {
// 	Bee.call(this, color);
// 	Grub.call(this, food);
// 	this.age = 10;
// 	this.job = "make honey";
// 	this.color = "yellow";
// 	this.honeyPot = 0;

// };

//  HoneyMakerBee.prototype = Object.create(Grub.prototype);// re-define child prototype to Parent prototype
//  HoneyMakerBee.prototype.constructor = HoneyMakerBee;// return original constructor to Child

//   HoneyMakerBee.prototype.makeHoney = function() {
// 	this.honeyPot++;
//  }

//   HoneyMakerBee.prototype.giveHoney = function() {
// 	this.honeyPot--;
//  }