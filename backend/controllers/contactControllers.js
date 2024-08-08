const Contacts = require('../Models/contactModels');
const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route get /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
});

//@desc create a contact
//@route post /api/contacts
//@access public

const createContact = asyncHandler( async (req,res) => {
    
    const {name , email , phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are Mandatory");
    }
    
    const contact = await Contacts.create({name,email,phone});
    res.status(201).json(contact);
});

//@desc get a contact
//@route get /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=>{

    const contact = await Contacts.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
});

//@desc update a contact
//@route put /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res)=>{

    const contact = await Contacts.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatecontact = await Contacts.findByIdAndUpdate(req.params.id ,
        req.body ,
        {new:true}
    ); 

    res.status(200).json(updatecontact);
});

//@desc delete a contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = asyncHandler( async (req,res)=>{
    const contact = await Contacts.findById(req.params.id);
    await Contacts.deleteOne();
    res.status(200).json(contact);
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};