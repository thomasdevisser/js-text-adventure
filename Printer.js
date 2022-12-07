class Printer {
  static title(title) {
    console.log(`${"*".repeat(10)} ${title} ${"*".repeat(10)} \n`);
  }

  static blankLine() {
    console.log("");
  }

  static paragraph(paragraph) {
    console.log(paragraph);
  }

  static currentLocation(location) {
    if (Object.keys(location.npc).length !== 0) {
      return console.log(
        `You're currently at ${location.name}, together with ${location.npc.name}`
      );
    }

    console.log(`You're currently at ${location.name}, all by yourself...`);
  }
}

module.exports = Printer;
