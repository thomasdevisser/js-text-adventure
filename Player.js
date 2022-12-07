const Character = require("./Character");

class Player extends Character {
  constructor(name, items, location) {
    super(name, items);
    this.location = location;
  }

  addItem(item) {
    if (this.items.includes(item)) {
      return this.say("I already have this item!");
    }

    this.items.push(item);
  }

  moveTo(newLocation) {
    if (this.location.adjacent.includes(newLocation)) {
      // Location is possible
    }

    return console.log("You can't go there from where you are.");
  }
}

module.exports = Player;
