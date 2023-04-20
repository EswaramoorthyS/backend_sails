module.exports = {
    friendlyName: 'Show company list in DB',

    description: `user able to see the company list value
     based on Db to using select query statement`,

    inputs: {
        
    },
    fn: async function (inputs) {
        var cmpList = Stock.find();
        return cmpList;

    }
}