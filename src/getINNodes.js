const getInstances = require("./getInstances");

module.exports = async function(faunaKey, dbClass, n) {
  try {
    const R = await getInstances(faunaKey, `${dbClass}_by_IN`, n);
    return R;
  } catch (e) {
    return e;
  }
};
