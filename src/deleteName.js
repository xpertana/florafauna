const getName = require("./getName");
const deleteInstance = require("./deleteInstance");

module.exports = async function(faunaKey, dbClass, n) {
  try {
    const R = await getName(faunaKey, dbClass, n);
    console.log(R);
    const R2 = await deleteInstance(faunaKey, dbClass, R.ref);
    console.log(R2);

    return R;
  } catch (e) {
    return e;
  }
};
