const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, name, data) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(
      q.CreateDatabase({
        name,
        data
      })
    )
    .catch(e => {
      return e;
    });

  return R;
};
