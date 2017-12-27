function doGet() {
  var htmlTemplate = HtmlService.createTemplateFromFile("example");
  var htmlOutput = htmlTemplate.evaluate();
  return htmlOutput;
}
