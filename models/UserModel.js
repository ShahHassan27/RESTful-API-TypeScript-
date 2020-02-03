const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _userId: Schema.Types.ObjectId,
  surname: String,
  email: { type: String, required: true, unique: true },
  dob: [Date],
  updated:{ type: Date, default: Date.now }
});

module.exports = mongoose.model("user", UserSchema);
