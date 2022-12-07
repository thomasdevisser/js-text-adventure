const NPC = require("./NPC");
const Player = require("./Player");
const Location = require("./Location");
const Printer = require("./Printer");

class Adventure {
  constructor() {
    this.title = "Hogwarts Hidden House";
    this.addNPCs();
    this.addLocations();
    this.player = new Player("Tom", [], this.locations.entranceHall);
    this.startGame();
  }

  addLocations() {
    const { hagrid, fred, vilder, ron, luna, hermoine, dobby } = this.npcs;
    const entranceHall = new Location("Entrance Hall", [
      "The Great Hall",
      "Common Room",
      "Hagrid's Hut",
      "Dungeons",
    ]);
    const greatHall = new Location("The Great Hall", ["Entrance Hall", "Teacher's Room"], hermoine);
    const teachersRoom = new Location("Teacher's Room", ["The Great Hall"], fred);
    const hogwartsKitchens = new Location("Hogwarts Kitchens", ["Teacher's Room"], dobby);
    const commonRoom = new Location("Common Room", ["Entrance Hall", "Owlery"], luna);
    const owlery = new Location("Owlery", ["Common Room"], vilder);
    const hagridsHut = new Location(
      "Hagrid's Hut",
      ["Entrance Hall", "Quidditch Changing Room"],
      hagrid
    );
    const quidditchChangingRoom = new Location("Quidditch Changing Room", ["Hagrid's Hut"], ron);
    const dungeons = new Location("Dungeons", ["Entrance Hall"]);
    this.locations = {
      entranceHall,
      greatHall,
      teachersRoom,
      hogwartsKitchens,
      commonRoom,
      owlery,
      hagridsHut,
      quidditchChangingRoom,
      dungeons,
    };
  }

  addNPCs() {
    const hagrid = new NPC("Hagrid", ["a doorkey"]);
    const fred = new NPC("Fred", ["Fred & George's map"]);
    const vilder = new NPC("Vilder", ["a scribbled note"]);
    const ron = new NPC("Ron", ["a dirty sock"]);
    const luna = new NPC("Luna", ["weird glasses"]);
    const hermoine = new NPC("Hermoine");
    const dobby = new NPC("Dobby");
    this.npcs = { hagrid, fred, vilder, ron, luna, hermoine, dobby };
  }

  startGame() {
    Printer.title(this.title);
    Printer.paragraph(
      `You're about to embark on an adventure in Hogwarts, where you'll be tasked to find one of it's long kept secrets. Are you ready to enter the wizarding world?`
    );
    Printer.currentLocation(this.player.location);
    //this.player.moveTo("The Great Hall");
  }
}

new Adventure();
