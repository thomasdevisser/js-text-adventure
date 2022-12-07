const printer = require("./Printer");

class Adventure {
  title = "Hogwarts Hidden House";

  constructor() {
    this.start_game();
  }

  async start_game() {
    printer.print_blank_line();
    printer.print_title(this.title);
    printer.print_blank_line();
    printer.print_paragraph(
      `You're about to embark on an adventure in Hogwarts, where you'll be tasked to find one of it's long kept secrets. Are you ready to enter the wizarding world?`
    );
    printer.print_blank_line();
  }
}

new Adventure();
