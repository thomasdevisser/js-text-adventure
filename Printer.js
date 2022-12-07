class Printer {
  static title(title) {
    console.log(`${"*".repeat(10)} ${title} ${"*".repeat(10)} \n`);
  }

  static blank_line() {
    console.log("");
  }

  static paragraph(paragraph) {
    console.log(paragraph);
  }

  static current_location(location) {
    if (location.npc) {
      return console.log(
        `You're currently at ${location.name}, together with ${location.npc.name}`
      );
    }

    console.log(`You're currently at ${location.name}, all by yourself...`);
  }
}

module.exports = Printer;
