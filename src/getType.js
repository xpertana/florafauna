const getInstance = require("./getInstance");

module.exports = async function(faunaKey, dbClass, i) {
  try {
    const R = await getInstance(faunaKey, `${dbClass}_by_t`, i);
    return R;
  } catch (e) {
    return e;
  }
};
