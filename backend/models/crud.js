const mongoose = require('mongoose');


const CryptoCurrencySchema = new mongoose.Schema({
    itemId:{
        type:Number         
    },
    name: {
        type:String,
        require: [true, 'You need to provide a name'],
    },
    quantity: { 
        type:Number,
        require: [true, "You need to provide a quantity"]    
    },    
    time : { type : Date, default: Date.now }
})

module.exports = mongoose.model('CryptoCurrency',CryptoCurrencySchema)