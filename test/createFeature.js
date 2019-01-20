const faunaCreate = require("../faunaCreate");

const ENGAGEDEMO_SECRET = "fnADEuAP_BACDRta8HL-JZavWtlesrhlgTJMrQ-U";

const F = {
  cjdb: {
    src: "cjdb",
    regex: "^(cjdbvalue)",
    ffetch: ["countrypop"]
  }
};

module.exports = async function create() {
  const R = await faunaCreate(ENGAGEDEMO_SECRET, "features", F);
  console.log(R);
};
