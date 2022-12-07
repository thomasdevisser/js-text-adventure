const Character = require("./Character");

class NPC extends Character {
  constructor(name, items) {
    super(name, items);
  }

  giveItem(item, player) {
    if (!this.items.includes(item)) {
      return this.say(`I'm sorry, I don't have ${item}`);
    }

    const index = this.items.indexOf(item);
    const items = this.items.splice(index, 1);
    player.addItem(items[0]);
  }
}

module.exports = NPC;
