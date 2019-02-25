const getInstance = require("./getInstance");

module.exports = async function(faunaKey, dbClass, n) {
  try {
    const R = await getInstance(faunaKey, `${dbClass}_by_n`, n);
    return R;
  } catch (e) {
    return e;
  }
};
