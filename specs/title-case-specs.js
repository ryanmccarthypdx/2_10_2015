describe("titleCase", function() {
  it("capitalizes the first letter of a single word title", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes all (non-forbidden) words", function() {
    expect(titleCase("cat train dog")).to.equal("Cat Train Dog");
  });

  it("does not capitolize articles, conjuntions or prepositions", function() {
    expect(titleCase("monkeys and sloths are the best")).to.equal("Monkeys and Sloths Are the Best");
  });

  it("always capitalizes the first word, no matter what", function() {
    expect(titleCase("the monkey ate the sloth")).to.equal("The Monkey Ate the Sloth");
  });

  it("always capitolize the last word, no matter what", function() {
    expect(titleCase("the five monsters of marblewood get it on")).to.equal("The Five Monsters of Marblewood Get It On");
  });

  it("title cases the string regardless of the case of the input", function() {
    expect(titleCase("soMe fucKeD UP cASing")).to.equal("Some Fucked up Casing");
  });
});


// it("", function() {
//   expect("").to.equal("");
// });
