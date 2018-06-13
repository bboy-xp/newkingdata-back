module.exports = app => {
  const mongoose = app.mongoose;
  const UserdataSchema = new mongoose.Schema({
    name: { type: String },
    token: { type: String },
    fields: { type: Object }
  },{
    timestamps: true,
  });

  return mongoose.model('Userdata', UserdataSchema);
}