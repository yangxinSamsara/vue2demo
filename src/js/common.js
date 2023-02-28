let cc = {a: 123}
const es = require('./es')
console.log(es, 'es')
module.exports = {
  cc,
  addCa() {
    cc = {a:1234}
  }
}
