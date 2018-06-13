module.exports = app => {
  const mongoose = app.mongoose;
  const FormdataSchema = new mongoose.Schema({
    name: { type: String },
    token: { type: String },
    fields: { type: Array }
  },{
    timestamps: true,
  });

  return mongoose.model('Formdata', FormdataSchema);
}