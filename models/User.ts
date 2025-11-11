import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exist.'],
      required: [true, 'Email is required.'],
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
    },
    profileImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model('User', UserSchema);

export default User;
