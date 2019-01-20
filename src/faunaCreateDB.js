const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, name, description) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(
      q.CreateDatabase({
        name,
        data: {
          description
        }
      })
    )
    .catch(e => {
      return e;
    });

  return R;
};
