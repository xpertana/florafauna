const getId = require("./getId");
const deleteInstance = require("./deleteInstance");

module.exports = async function(faunaKey, dbClass, id) {
  try {
    const R = await getId(faunaKey, dbClass, id);
    //console.log(R);
    const R2 = await deleteInstance(faunaKey, dbClass, R.ref);
    //console.log(R2);

    return R;
  } catch (e) {
    return e;
  }
};
