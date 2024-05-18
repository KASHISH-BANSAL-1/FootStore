const mongoose =  require('mongoose');

const shoeSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true
    },
    price:{
        type: Number,
        trim: true
    },
    desc:{
        type: String,
        trim: true
    },
    img:{
        type: String,
        trim: true
    },
    category:{
        type: String,
        trim: true
    }

})

const Shoe = mongoose.model("Shoe", shoeSchema)

module.exports = Shoe;