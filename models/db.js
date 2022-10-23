const mongoose = require('mongoose');
const url = "mongodb+srv://tuanchou1305:tuanchou1305@cluster0.do6tx1l.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
require('./product.model');