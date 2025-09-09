function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Tip Pool Splitter')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1');
}

