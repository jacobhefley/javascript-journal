exports.words = function words(paragraph) {
  var result = paragraph.split(" ").length;
  return result;
}