const { defaults } = require("jest-config");
module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
