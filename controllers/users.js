import model from '../models/userInfo.js';

// export const getUsers = async (req,res) => {
//     try{
//         const users= await model.find();

//         res.status(200).json(users);
//     }catch(err){
//         res.status(404).json({message: err.message})
//     }
// }

export const addUser = async (req,res) => {
    const { email, pass, bId, devId, orgName }=req.body;

    const checkUser= await model.find({email: email});
    console.log(checkUser.length)
    if(checkUser.length>0){
        res.status(403).send()
        console.log("User Already Exists!")
    }
    else{
        const user=new model({ email, pass, bId, devId, orgName });
        try{
            await user.save();
    
            res.status(201).json(user);
        }catch(err){
            console.log(err.message);
            res.status(409).json({message:err.message});
        }    
    }
}

export const getUser = async(req,res) => {
    try{
        const user= await model.find({email: req.params.email});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

export const verifyUser  = async(req,res) => {
    try{
        console.log("checking user...")
        const { email, pass }=req.body;
        const user= await model.find({email: email});
        if(user[0].pass==pass)
            res.status(200).json(user);
        else
            res.status(200).json()
    }catch(err){
        res.status(404).json({message: err.message})
    }
}