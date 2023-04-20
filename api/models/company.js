module.exports = {
    sideEffects: 'cacheable',
    sync: true,
    attributes: {
        cmpName: { type: 'string', required: true, maxLength: 255, },
        address: { type: 'string', required: true, maxLength: 255, },
    },
};