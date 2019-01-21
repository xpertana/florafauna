module.exports = function(values, ref = true, ts = true) {
  // terms is an array of names
  const valueObj = [];
  if (ts) valueObj.push({ field: ["ts"] });
  if (ref) valueObj.push({ field: ["ref"] });
  for (let i = 0; i < values.length; i++) {
    valueObj.push({ field: ["data", `${values[i]}`] });
  }

  return valueObj;
};
