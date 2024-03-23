const Orderdetails = require("../models/orderdetails").Orderdetails;

exports.order = async(req, res, next) =>{
 try {
    const {address, city, pincode, phoneNo, country, state, itemname} = req.body;

     const order = {
        address,
        city,
        pincode,
        phoneNo,
        country,
        state,
        itemname
     
     }

     const result = await Orderdetails.create(order);
     console.log(result);
     res.json({ message: 'order details saved' });
 } catch (error) {
   next(error)  
 }
}