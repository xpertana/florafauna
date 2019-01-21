const cuid = require("cuid");
const getId = require("./getId");
const replaceInstance = require("./replaceInstance");
const createInstance = require("./createInstance");

module.exports = async function(faunaKey, dbClass, id, obj) {
  try {
    obj.id = id; // keep the id field the same! all other fields will be overwritten
    const R = await getId(faunaKey, dbClass, id);
    console.log(R);

    if (!R.ref) {
      // id does not exist...create new
      obj.id = id; // add the id to the object
      const R2 = await createInstance(faunaKey, dbClass, obj);
      return R2;
    }

    // id exists..replace
    const R2 = await replaceInstance(faunaKey, dbClass, R.ref, obj);
    return R2;
  } catch (e) {
    return e;
  }
};
