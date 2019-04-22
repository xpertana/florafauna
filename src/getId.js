const getInstance = require("./getInstance");

module.exports = async function(faunaKey, dbClass, i) {
  try {
    const R = await getInstance(faunaKey, `${dbClass}_by_i`, i);
    return R;
  } catch (e) {
    return e;
  }
};
