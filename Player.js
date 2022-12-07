const Character = require("./Character");

class Player extends Character {
  constructor(name, items) {
    super(name, items);
  }

  addItem(item) {
    if (this.items.includes(item)) {
      return this.say("I already have this item!");
    }

    this.items.push(item);
  }
}

module.exports = Player;
