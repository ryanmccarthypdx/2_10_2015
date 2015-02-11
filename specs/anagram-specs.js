describe("anagram", function() {
  it("returns false if the first word does not contain the letters of the second word", function() {
    expect(anagram("house", "cat")).to.equal(false);
  });

  it("returns true if the first word is identical to the banked word", function() {
    expect(anagram("act", "act")).to.equal(true);
  });

  it("returns true if word1 contains the same letters as word2", function() {
    expect(anagram("act", "cat")).to.equal(true);
  });

  it("returns true if word1 is partially included in word2", function() {
    expect(anagram("hats", "haa")).to.equal(true);
  });
});

// it("", function() {
//   expect(anagram("")).to.equal("");
// });
