const getName = require("./getName");
const deleteInstance = require("./deleteInstance");

module.exports = async function(faunaKey, dbClass, n) {
  try {
    const R = await getName(faunaKey, dbClass, n);
    const R2 = await deleteInstance(faunaKey, dbClass, R.ref);

    return R;
  } catch (e) {
    return e;
  }
};
