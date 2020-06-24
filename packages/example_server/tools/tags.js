// $branch-$version
const branch = process.argv.pop();
const version = require('./../package.json').version;
console.log(branch === 'master' ? version : version + '-' + branch);