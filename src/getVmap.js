const getInstances = require("./getInstances");

module.exports = async function(faunaKey, dbClass, instance) {
  try {
    const R = await getInstances(faunaKey, `${dbClass}_vmap`, instance);
    return R;
  } catch (e) {
    return e;
  }
};
