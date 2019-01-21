const getInstance = require("./getInstance");

module.exports = async function(faunaKey, dbClass, id) {
  try {
    const R = await getInstance(faunaKey, `${dbClass}_by_id`, id);
    return R;
  } catch (e) {
    return e;
  }
};
