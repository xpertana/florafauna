const faunadb = require("faunadb"),
  q = faunadb.query;
const createIndex = require("./createIndex");

module.exports = async function(faunaKey, dbClass, values) {
  try {
    const R = await createIndex({
      faunaKey,
      dbClass,
      name: `${dbClass}_by_id`,
      terms: "id",
      values,
      unique: true
    });
    return R;
  } catch (e) {
    return e;
  }
};
