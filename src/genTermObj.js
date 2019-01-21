module.exports = function(terms) {
  // terms is an array of names
  if (typeof terms == "string") return [{ field: ["data", terms] }];
  // we have an array
  const termsObj = [];
  for (let i = 0; i < terms.length; i++) {
    termsObj.push({ field: ["data", `${terms[i]}`] });
  }
  return termsObj;
};
