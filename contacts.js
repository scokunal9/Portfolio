let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Contact

let Contact= require('../models/contact');

//route

router.get('/', ( req, res, next) =>{
Contact.find((err,contactList)=>{
if(err){

    return console.error(err);
}
else{

    //print contactli

    res.render('contactList',{title: 'Contact List',ContactList:contactList})
}

});

});

module.exports=router;