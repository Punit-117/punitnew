const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderdetailsSchema = new Schema({
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    pincode: {
        type: String,
        require: true
    },
    phoneNo: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    itemname:{
        type: String,
        require: true
    }
})


OrderdetailsSchema.statics = {
    create: function(data){
        const orderdetails = new this(data);
        return orderdetails.save();
    }
}

const Orderdetails = mongoose.model('Orderdetails',OrderdetailsSchema);
module.exports = {Orderdetails};