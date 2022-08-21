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
    const { uid, orgName, bId, devId}=req.body;

    const user=new model({uid, orgName, bId, devId});
    try{
        await user.save();

        res.status(201).json(user);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const getUser = async(req,res) => {
    try{
        const user= await model.find({uId: req.params.sec});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}
