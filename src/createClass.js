const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(
  faunaKey,
  dbClass,
  ttl,
  history = 30,
  idIndex = true
) {
  try {
    const client = new faunadb.Client({ secret: faunaKey });

    let result = {};
    result.create = await client.query(
      q.CreateClass({ name: dbClass, ttl_days: ttl, history_days: history })
    );

    // create an index on the id field. true by default
    if (idIndex) {
      result.index = await client.query(
        q.CreateIndex({
          name: `${dbClass}_by_id`,
          source: q.Class(dbClass),
          terms: [{ field: ["data", "id"] }],
          unique: true
        })
      );
    }
    return result;
  } catch (e) {
    return e;
  }
};
