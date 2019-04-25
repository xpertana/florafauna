const cuid = require("cuid");
const getId = require("./getId");
const replaceInstance = require("./replaceInstance");
const createInstance = require("./createInstance");

module.exports = async function(faunaKey, dbClass, i, obj) {
  try {
    obj.i = i; // keep the id field the same! all other fields will be overwritten

    const R = await getId(faunaKey, dbClass, i);

    if (!R.ref) {
      // id does not exist...create new
      obj.i = i; // add the id to the object
      obj.v = 1; // add a version field staring with v1
      const R2 = await createInstance(faunaKey, dbClass, obj);
      return R2;
    }

    // id exists..replace
    // increment the version field

    //obj.v = obj.v + 1;
    obj.v = R.data.v + 1;

    const R2 = await replaceInstance(faunaKey, dbClass, R.ref, obj);
    return R2;
  } catch (e) {
    return e;
  }
};
