const getId = require("./getId");
const deleteInstance = require("./deleteInstance");

module.exports = async function(faunaKey, dbClass, i) {
  try {
    const R = await getId(faunaKey, dbClass, i);
    //console.log(R);
    const R2 = await deleteInstance(faunaKey, dbClass, R.ref);
    //console.log(R2);
    return R2;
  } catch (e) {
    return e;
  }
};
