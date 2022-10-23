const mongoose = require('mongoose');
var validator = require("email-validator");

var productchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'This field is required'
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
    des: {
        type: String
    },
})

// custom validation for email

// productchema.path('email').validate((val) => {
//     return validator.validate(val);
// }, 'Invalid Email');

mongoose.model('Product', productchema);