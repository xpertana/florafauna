const getInstances = require("./getInstances");

module.exports = async function(faunaKey, dbClass, instance, type) {
  try {
    const input = [instance, type];
    const R = await getInstances(faunaKey, `${dbClass}_instance`, input);
    return R;
  } catch (e) {
    return e;
  }
};
