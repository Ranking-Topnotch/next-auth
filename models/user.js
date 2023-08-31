import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required']
    },
    username: {
        type: String,
        unique: [true, 'Email already exist'],
        match: [/^(?=.{8,20}$)[a-zA-Z0-9._]+(?<![_.])$/, 'UserName Invalid, it should conatian 8-20 alphanumeric letters and be uniquie']
    },
    image: {
        type: String
    }
})

const User = models.User || model('User', UserSchema);

export default User