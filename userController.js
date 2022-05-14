const User=require('../models/userModel');

const loadRegister = async(req,res)=>{
    try{

        res.render('registation');

    }catch(error){
        console.log(error.message);
    }
}

const insertUser = async(req,res)=>{

    try{
        const user = new User({
            name: req.body.name,
            eamil: req.body.email,
            mobile: req.body.mno,
            image:req.file.filename,
            password: req.body.password,
            is_admin: 0,

        });

       const userdata=await user.save();
        if(userData){
            res.render('registation',{message:"your registration has been successfull"});

        }

        else{
            res.render('registation',{message:"your registration has been failed"});
        }

    }catch(error){
        console.log(error.message);
    }
}

module.exports={
    loadRegister,
    insertUser
}