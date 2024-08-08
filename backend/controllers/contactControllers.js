const Contacts = require('../Models/contactModels');
const asyncHandler = require('express-async-handler');

//@desc get all contacts
//@route get /api/contacts
//@access private

//by adding user_id to find we get the contacts with a particular user id i.e his contacts only 
const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await Contacts.find({user_id:req.user.id});
    res.status(200).json(contacts);
});

//@desc create a contact
//@route post /api/contacts
//@access private

const createContact = asyncHandler( async (req,res) => {
    
    const {name , email , phone} = req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("All fields are Mandatory");
    }
    
    const contact = await Contacts.create({user_id:req.user.id ,name,email,phone});
    res.status(201).json(contact);
});

//@desc get a contact
//@route get /api/contacts/:id
//@access private

const getContact = asyncHandler(async (req,res)=>{

    const contact = await Contacts.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id !== req.user_id)
    {
        res.status(401);
        throw new Error("You cannot access other contacts");
    }
    res.status(200).json(contact);
});

//@desc update a contact
//@route put /api/contacts/:id
//@access private

const updateContact = asyncHandler(async (req,res)=>{

    const contact = await Contacts.findById(req.params.id);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id !== req.user_id)
    {
        res.status(401);
        throw new Error("You cannot update other contacts");
    }

    const updatecontact = await Contacts.findByIdAndUpdate(req.params.id ,
        req.body ,
        {new:true}
    ); 

    res.status(200).json(updatecontact);
});

//@desc delete a contact
//@route delete /api/contacts/:id
//@access private

const deleteContact = asyncHandler( async (req,res)=>{
    const contact = await Contacts.findById(req.params.id);

    if(!contact.user_id !== req.user_id)
    {
        res.status(401);
        throw new Error("You cannot delete other contacts");
    }

    await Contacts.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};