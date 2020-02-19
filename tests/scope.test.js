// import jest from "jest";

// (function() {
describe("Scope Exercises", function() {
  var ACTUAL;

  beforeEach(function() {
    ACTUAL = null;
  });

  it("a function has access to its own local scope variables", function() {
    var fn = function() {
      var name = "inner";
      ACTUAL = name;
    };
    fn();
    expect(ACTUAL === "inner").toBe(true);
  });
});
// })();
