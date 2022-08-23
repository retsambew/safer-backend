import mongoose from "mongoose";

const appSchema = mongoose.Schema({
    uid: {          // ID of user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    name: String,   // app name
    type: String,   // type of app
    status: String, // validation status
    cat: String,    // category
    repId: {        // report ID
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reports'
    }
})

var appInfo = mongoose.model('Apps',appSchema);

export default appInfo;