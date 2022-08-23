import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apps'
    },
    score: String,              // safety score
    status: String,             // validation status
    acceptedServices: [String],   
    rejectedServices: [String],   
    unknownServices: [String],   
    tnc: {                      // T&C Upload
        data: Buffer,
        contentType: String
    },
    manifest: {                 // Reason Manifest
        data: Buffer,
        contentType: String
    }
})

var reportInfo = mongoose.model('Reports',reportSchema);

export default reportInfo;