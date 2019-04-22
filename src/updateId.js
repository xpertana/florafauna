const cuid = require("cuid");
const getId = require("./getId");
const updateInstance = require("./replaceInstance");
const createInstance = require("./createInstance");

module.exports = async function(faunaKey, dbClass, i, obj) {
  try {
    obj.i = i; // keep the id the same
    const R = await getId(faunaKey, dbClass, i);
    console.log(R);

    if (!R.ref) {
      // id does not exist...create new
      obj.id = id; // add the id to the object
      const R2 = await createInstance(faunaKey, dbClass, obj);
      return R2;
    }

    // id exists..replace
    const R2 = await updateInstance(faunaKey, dbClass, R.ref, obj);
    return R2;
  } catch (e) {
    return e;
  }
};
