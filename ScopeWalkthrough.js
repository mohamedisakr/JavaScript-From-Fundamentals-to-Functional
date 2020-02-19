var ACTUAL = null;

function test() {
  function outerFn() {
    var counterInOuterScope = 10;

    function innerIncrementFn() {
      counterInOuterScope = counterInOuterScope + 1;
      ACTUAL = counterInOuterScope;
    }

    innerIncrementFn();
    console.log(ACTUAL);
    innerIncrementFn();
    console.log(ACTUAL);

    globalThis.retainedInnerFn = innerIncrementFn;
  }

  console.log(globalThis.retainedInnerFn);

  outerFn();

  console.log(globalThis.retainedInnerFn);

  console.log(globalThis.retainedInnerFn());

  console.log(ACTUAL);
}

test();

/*
function parentFn() {
  var outerCounter = 10;
  function childFn() {
    outerCounter = outerCounter + 1; //||
    ACTUAL = outerCounter;
  }
  childFn();
  console.log(ACTUAL);
  childFn();
  console.log(ACTUAL);
}

parentFn();
*/

/*
function parentFn() {
  var outerCounter = 10;
  function childFn() {
    outerCounter = outerCounter + 1;
    ACTUAL = outerCounter;
  }
  childFn();
  console.log(ACTUAL);
  childFn();
  console.log(ACTUAL);
}
*/

/*
function parentFn() {
  var outerName = "outer";

  function childFn() {
    innerName = "inner";
    ACTUAL = innerName + outerName;
  }
  childFn();
  console.log(ACTUAL);
}

parentFn();
*/

/*
function parentFn() {
  function childFn() {
    var localVariable;
    if (localVariable === undefined) {
      ACTUAL = "alpha";
    } else if (localVariable === "initialized") {
      ACTUAL = "omega";
    }
    localVariable = "initialized";
  }
  childFn();
  console.log(ACTUAL);
  childFn();
  console.log(ACTUAL);
}

parentFn();

*/
/*
function parentFn() {
  function childFn() {
    var innerCounter = innerCounter || 10;
    innerCounter = innerCounter + 1;
    ACTUAL = innerCounter;
  }
  childFn();
  console.log(ACTUAL);
  childFn();
  console.log(ACTUAL);
}

parentFn();
*/

/*
function parent() {
  var sameName = "outer";
  function child() {
    var sameName = "inner";
    // ACTUAL = sameName;
  }
  child();
  ACTUAL = sameName;
  console.log(ACTUAL);
}

parent();
*/

/*
function parent() {
  var sameName = "outer";
  function child() {
    var sameName = "inner";
    ACTUAL = sameName;
  }
  child();
  console.log(ACTUAL);
}

parent();
*/

/*
var firstFn = function() {
  var localToFirstFn = "first";
  secondFn();
};

var secondFn = function() {
  ACTUAL = localToFirstFn;
};

console.log(ACTUAL);
secondFn();
*/
