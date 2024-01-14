// console.log(global);
// Common js instead of ES6 modules

const os = require("os");
const path = require("path");
const math = require('./Math')
// const {add,sub} = require('./Math')
console.log(math.add(4,5));

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// object with all values
console.log(path.parse(__filename));
