//@desc get all contacts
//@route get /api/contacts
//@access public

const getContacts = (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
}

//@desc create a contact
//@route post /api/contacts
//@access public

const createContact = (req,res)=>{
    res.status(201).json({message:"Create contact"});
}

//@desc get a contact
//@route get /api/contacts/:id
//@access public

const getContact = (req,res)=>{
    res.status(201).json({message:`Get contact with id ${req.params.id}`});
}

//@desc update a contact
//@route put /api/contacts/:id
//@access public

const updateContact = (req,res)=>{
    res.status(200).json({message:`Update contact with id ${req.params.id}`});
}

//@desc delete a contact
//@route delete /api/contacts/:id
//@access public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`delete contact with id ${req.params.id}`});
}

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};