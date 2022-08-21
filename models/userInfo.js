import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    uid: String,        // user id from firebase auth
    orgName: String,    // Organisation name
    bId: String,        // Business ID
    devId: String,      // Developer ID
    apps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apps'
    }],

    // verified: {
    //     type:Boolean,
    //     default: false
    // },
})

var userInfo = mongoose.model('Users',userSchema);

export default userInfo;