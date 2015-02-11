var anagram = function(wordLong, wordShort) {
  var wordLongSplit = wordLong.split("").sort();
  var wordShortSplit = wordShort.split("").sort();
  var missCount = 0;
  var missExpect = (wordLongSplit.length)-(wordShortSplit.length);

  wordShortSplit.forEach(function(wSletter) {
    var indexer = wordShortSplit.indexOf(wSletter)
    while (indexer <= ((wordShortSplit.length)-1)) {
      if (wordLongSplit[indexer] === wSletter) {
        indexer = 1000
      } else if (indexer <= ((wordShortSplit.length)-1)) {
        indexer++
      } else {
        missCount++
      }
    }
  });

  if (missCount > missExpect) {
    return false
  }
  else {
    return true
  }

};


// $(document).ready(function() {
//   $("form#entry-word").submit(function(event) {
//
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
