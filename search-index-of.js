// Class Search
class Search {
    constructor(docs) {
        this.docs = docs;
    }

    findDocs(keyword) {
        let matches = [];
        for (let i = 0; i < this.docs.length; i += 1) {
            let doc = this.docs[i];
            if (doc.indexOf(keyword) !== -1) matches.push(i);
        }
        return matches;
    }
}

module.exports = Search;
