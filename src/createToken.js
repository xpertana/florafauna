const faunadb = require("faunadb"),
  q = faunadb.query;

module.exports = async function(faunaKey, dbClass, refId) {
  const client = new faunadb.Client({ secret: faunaKey });
  const R = await client
    .query(q.Login(q.Ref(q.Class(dbClass), refId), {}))
    .catch(e => e);
  return R;
};

//Ref(Class("items3"), "222099292063531531"),
