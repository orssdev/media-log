import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>(
  {
        name: String,
        email: String,
        password: String,
  },
  { timestamps: true, collection: 'users' }
);

export default (mongoose.models.User as Model<IUser>) ||
    mongoose.model<IUser>("User", UserSchema);