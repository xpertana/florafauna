const faunadb = require("../shim/faunadb");
const { Map, Paginate, Match, Index, Var, Select, Lambda, Get } = faunadb.query;

module.exports = async function(faunaKey, index) {
  try {
    const client = new faunadb.Client({ secret: faunaKey });

    const Q = Map(Paginate(Match(Index(index))), Lambda("X", Get(Var("X"))));

    const R = await client.query(Q);
    console.log(R);
    return R;
  } catch (e) {
    console.log(e.message);
  }
};
