const express=require('express');
const router=express.Router();
const Details=require('../models/schema.js');
const multer=require('multer');
const upload=multer({dest:'uploads/'});

router.get('/get', async (req,res)=>{
	try{
		const details=await Details.find();
		res.send(details)
	}
	catch(err){
		res.send(err.message)
	}
});
//for testing uploading files
router.post('/upload',upload.single('name'),(req,res)=>{
		res.send("uploaded succesfully")

})
router.post('/uploads',upload.array('group',10),(req,res)=>{
	res.send("group of images uploaded succesfully")
})

router.post('/add',async (req,res)=>{

	const details=new Details({
		name:req.body.name,
		education_Qualification:req.body.eduQ,
		designation:req.body.designation,
		mail:req.body.mail,
		contact:req.body.contact,
		achievements:req.body.achievements,
		experience:req.body.experience,
		department:req.body.department,
		teaching_or_nonteaching:req.body.teaching_or_nonteaching,
		subject_teaching:req.body.subject_teaching,
		permanent_or_guest:req.body.permanent_or_guest
	});
	try{
		await details.save();
		res.send("Succesfully saved to db")
	}
	catch(err){
		res.send(err.message)
	}
});

router.patch('/update/:id', async (req,res)=>{
		try{
			const update= await Details.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
			res.send(update)
		}
		catch(err){
			res.send(err.message)
		}
});

module.exports=router