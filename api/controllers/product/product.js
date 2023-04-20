module.exports = {
    friendlyName: 'Show product list in DB',

    description: `user able to see the product list value
     based on Db to using select query statement`,

    inputs: {
        
    },
    fn: async function (inputs) {
        var productList = Stock.find();
        return productList;

    }
}