const mongoose=require('mongoose');

const schema=mongoose.Schema({

	name:{
		type:String,
		required:true
	},
	education_Qualification:{
		type:String,
		required:true
	},
	designation:{
		type:String,
		required:true
	},
	mail:{
		type:String,
		required:true
	},
	contact:{
		type:Number,
		required:false
	},
	achievements:{
		type:String
	},
	experience:{
		type:Number,
		required:false
	},
	department:{
		type:String,
		required:true
	},
	teaching_or_nonteaching:{
		type:String,
		required:false
	},
	subject_teaching:{
		type:String,
		required:false
	},
	permanent_or_guest:{
		type:String,
		required:false
	},


},
	{collection:'Details'}
);

module.exports=mongoose.model("Schema",schema);