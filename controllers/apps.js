import model from '../models/appInfo.js';
import { generateReport } from './report.js';

export const addApp = async (req,res) => {
    const { uid, name, type, cat}=req.body;
    const app=new model({uid, name, type, cat});
    try{
        const report = await generateReport(req,res,app._id);
        console.log("\n\n\n")
        console.log(report)
        // await model.updateOne({_id:app._id},{$set:{repID:report._id,status:report.status}})
        app.$set({repId:report._id,status:report.status})
        await app.save();
        res.status(201).json({app:app,report:report})
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
