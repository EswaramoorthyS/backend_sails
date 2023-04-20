module.exports = {
    sideEffects: 'cacheable',
    sync: true,

    attributes: {
        proName: { type: 'string', required: true, maxLength: 255, },
        star: { type: 'string', required: true, maxLength: 255, },
        price: { type: 'number', required: true, },
    },
};