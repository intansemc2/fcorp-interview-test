const SearchIndexOf = require('../search-index-of.js');

describe('Test Search TFT default example', function () {
    // Main
    let search = new SearchIndexOf([
        'Bank regulation: Bank regulation is a form of government regulation which subjects banks to certain requirements',
        'Banking crisis: When banks suffer a sudden rush of withdrawals by depositors, this is called a bank run',
    ]);

    it('docs[0]', function () {
        expect(search.findDocs('government')).toEqual([0]);
    });

    it('docs[0, 1]', function () {
        expect(search.findDocs('banks')).toEqual([0, 1]);
    });
});
