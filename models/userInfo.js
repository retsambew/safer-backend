import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: String,      
    pass: String,
    bId: String,        // Business ID
    devId: String,      // Developer ID
    orgName: String,    // Organisation name
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