const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, ttl, history = 30) {
  try {
    console.log("heree...");
    const client = new faunadb.Client({ secret: faunaKey });
    const R = await client.query(
      q.CreateClass({ name: dbClass, ttl_days: ttl, history_days: history })
    );
    console.log(R);
    return R;
  } catch (e) {
    console.log(e);
  }
};
