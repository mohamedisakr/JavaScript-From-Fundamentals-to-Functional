function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    }
  };
}

function Populate(suspect) {
  suspectsList.push(CreateSuspectObjects(suspect));
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
var suspectsList = [];

suspects.forEach(Populate);
console.log(suspectsList);
