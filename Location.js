class Location {
  constructor(name, adjacent, npc = {}) {
    this.name = name;
    this.adjacent = adjacent;
    this.npc = npc;
  }
}

module.exports = Location;
