import model from "../models/reportInfo.js";
import axios from "axios";
import request from "request-promise";
import cheerio from "cheerio";
import { spawn } from "child_process";

export const generateReport = async (uid, tnc, manifest, app) => {
  const pyProg = spawn("python", ["./../pypy.py"]);

  pyProg.stdout.on("data", function (data) {
    console.log(data.toString());
    res.write(data);
    res.end("end");
  });

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
  console.log("in");
  try {
    await report.save();

    return report;
  } catch (err) {
    console.log(err.message);
    return err;
    // res.status(409).json({message:err.message});
  }
};

export const getReport = async (req, res) => {
  try {
    const report = await model.find({ app: req.params.app });
    res.status(200).json(report);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getScrap = (url) => {
  const pyProg = spawn("python", ["./scrap.py", url]);
  console.log(pyProg);
  return new Promise((resolve, reject) => {
    pyProg.stdout.on("data", (data) => {
      const out = resolve(data.toString());
      res.write(data);
      res.end("end");
      console.log(out);
    });
    pyProg.stderr.on("data", reject);
  });
  // pyProg.stdout.on("data", function (data) {
  //   console.log(data.toString());
  //   res.write(data);
  //   res.end("end");
  // });
};
