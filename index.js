const Search = require('./search-index-of.js');

// Main
let search = new Search([
    'Bank regulation: Bank regulation is a form of government regulation which subjects banks to certain requirements',
    'Banking crisis: When banks suffer a sudden rush of withdrawals by depositors, this is called a bank run',
]);

console.log(search.findDocs('government'));
console.log(search.findDocs('banks'));
