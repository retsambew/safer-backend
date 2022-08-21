import mongoose from "mongoose";

const appSchema = mongoose.Schema({
    name: String,   // app name
    type: String,   // type of app
    status: String, // validation status
    cat: String,    // category
    TNC: {          // T&C Upload
        data: Buffer,
        contentType: String
    },
    Manifest: {          // Reason Manifest
        data: Buffer,
        contentType: String
    } 
})

var appInfo = mongoose.model('Users',appSchema);

export default appInfo;