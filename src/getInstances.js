const faunadb = require("faunadb");
const { Map, Paginate, Match, Index, Var, Select, Lambda, Get } = faunadb.query;

module.exports = async function(faunaKey, index, value) {
  const client = new faunadb.Client({ secret: faunaKey });

  const Q = Map(
    Paginate(Match(Index(index), value)),
    Lambda("X", Get(Select(1, Var("X"))))
  );

  const R = await client.query(Q);
  return R;
};
