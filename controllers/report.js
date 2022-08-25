import model from '../models/reportInfo.js';
import axios from 'axios';
import cheerio from 'cheerio';

export const generateReport = async (req, res, app) => {
  const { uid, tnc, manifest } = req.body;

  let score = 100;
  let status = "accepted";
  let acceptedServices,
    rejectedServices,
    unknownServices = [];
  const report = new model({
    uid,
    app,
    score,
    status,
    acceptedServices,
    rejectedServices,
    unknownServices,
    tnc,
    manifest,
  });
  console.log(report);
  try {
    await report.save();

    return report;
  } catch (err) {
    console.log(err.message);
    return err;
    // res.status(409).json({message:err.message});
  }
};

export const getReport = async (req,res) => {
    try{
        const report= await model.find({app: req.params.app});
        res.status(200).json(report);
    }catch(err){
        res.status(404).json({message: err.message})
    }
}

const getScrap = (url) => {
    axios(url)
        .then(response => {
            const html = response.data;
            console.log(html)
            const cheer = cheerio.load(html)
            let ourData = ""
            cheer('body',html).each(()=>{
                const text=cheer(this).text()
                ourData+=text
            })
            // console.log(text)
        }).catch(err => console.log(err))
}
