class Printer {
  print_title(title = "") {
    const title_length = title.length;
    console.log("*".repeat(24 + title_length));
    console.log("*".repeat(10) + `  ${title}  ` + "*".repeat(10));
    console.log("*".repeat(24 + title_length));
  }

  print_blank_line() {
    console.log("");
  }

  print_paragraph(p) {
    console.log(p);
  }
}

module.exports = new Printer();
