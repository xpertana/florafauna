const getAllInstances = require("./getAllInstances");

module.exports = async function(faunaKey, dbClass, n) {
  try {
    const R = await getAllInstances(faunaKey, `all_${dbClass}`);
    return R;
  } catch (e) {
    return e;
  }
};
