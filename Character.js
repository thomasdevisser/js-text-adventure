class Character {
  constructor(name, items = []) {
    this.name = name;
    this.items = items;
  }

  say(sentence) {
    console.log(`${this.name}: ${sentence}`);
  }

  showItems() {
    console.dir(this.items);
  }
}

module.exports = Character;
