import model from '../models/userInfo.js';

export const addApp = async (req,res) => {
    const { uid, orgName, bId, devId}=req.body;

    const app=new model({uid, orgName, bId, devId});
    try{
        await app.save();

        res.status(201).json(app);
    }catch(err){
        console.log(err.message);
        res.status(409).json({message:err.message});
    }
}

export const getApp = async(req,res) => {
    try{
        const app= await model.find({_id: req.params.sec});
        res.status(200).json(app);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}
