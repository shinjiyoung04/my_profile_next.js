import mongoose from 'mongoose'

const adviceSchema = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  ipAddress: { type: String, required: true }, // IP 주소 추가
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Advice || mongoose.model('Advice', adviceSchema)
