const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

const carsSchema = new mongoose.Schema(
  {
    make: { type: String, required: true },
    carModel: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    safetyRating: { type: Number, required: true, min: 1, max: 5 },
    description: { type: String, required: true, maxlength: 500 },
    comments: [commentsSchema],
    user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Car', carsSchema)
