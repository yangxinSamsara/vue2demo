import esobj, { aa } from "./es"
// ea = 456
console.log("es", esobj.a, aa)
esobj.addA()
console.log("es", esobj.a, aa)

const { cc, addCa } = require("./common")
console.log(cc) //0
addCa()
console.log(cc) //0
