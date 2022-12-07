const NPC = require("./NPC");
const Player = require("./Player");
const Printer = require("./Printer");

class Adventure {
  constructor() {
    this.title = "Hogwarts Hidden House";
    this.add_npcs();
    this.current_location = { name: "The Entrance Hall" };
    this.start_game();
  }

  add_npcs() {
    const hagrid = new NPC("Hagrid", ["a doorkey"]);
    const fred = new NPC("Fred", ["Fred & George's map"]);
    const vilder = new NPC("Vilder", ["a scribbled note"]);
    const ron = new NPC("Ron", ["a dirty sock"]);
    const luna = new NPC("Luna", ["weird glasses"]);
    const hermoine = new NPC("Hermoine");
    const dobby = new NPC("Dobby");
    this.npcs = { hagrid, fred, vilder, ron, luna, hermoine, dobby };
  }

  start_game() {
    Printer.title(this.title);
    Printer.paragraph(
      `You're about to embark on an adventure in Hogwarts, where you'll be tasked to find one of it's long kept secrets. Are you ready to enter the wizarding world?`
    );
    Printer.current_location(this.current_location);
  }
}

new Adventure();
