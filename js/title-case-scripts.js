var capitalize = function(inputWord) {
  var letters = inputWord.split("");
  var firstLetter = letters.shift();
  var cappedLetter = firstLetter.toUpperCase();
  letters.unshift(cappedLetter);
  var outputWord = letters.join("");
  return outputWord;
};


var titleCase = function(inputString) {
  var loweredString = inputString.toLowerCase();
  var outputArray = [];
  var words = loweredString.split(" ");
  var shiftedWord = capitalize(words.shift());

  if ((words.length) > 0) {
    var poppedWord = capitalize(words.pop());
  }

  var forbiddenWords = ["a", "an", "the", "at", "by", "for", "in", "of", "on", "to", "up", "and", "as", "but", "or", "nor"];

  words.forEach(function(word) {
    if (forbiddenWords.indexOf(word) === -1) {
      var outputWord = capitalize(word);
      outputArray.push(outputWord);
    }
    else {
      outputArray.push(word);
    }
  });
  outputArray.unshift(shiftedWord);
  if ((outputArray.length) === 1) {
    var outputString = outputArray.join();
  } else {
    outputArray.push(poppedWord);
    var outputString = outputArray.join(" ");
  }

  return outputString;

};
