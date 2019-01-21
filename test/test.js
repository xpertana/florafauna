const ff = require("../index");
const KEY = "fnADFQwvmmACC06hfYubk9-I8gHf8V0gk7dVpUPh";

const item = { id: "cj1", name: "bob" };

const r1 = ff.createClass(KEY, "items2");
const r2 = ff.create(KEY, "items2", item);
