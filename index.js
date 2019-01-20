module.exports = {
  create: require("./src/faunaCreate"),
  createClass: require("./src/faunaCreateClass"),
  createDB: require("./src/faunaCreateDB"),
  createIndex: require("./src/faunaCreateIndex"),
  createKey: require("./src/faunaCreateKey"),
  read: require("./src/faunaRead"),
  match: require("./src/faunaIndexMatch")
};
