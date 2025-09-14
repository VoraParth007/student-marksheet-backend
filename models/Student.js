// models/Student.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rollNo: { type: String, required: true, unique: true },
  marks: {
    sub1: { type: Number, required: true },
    sub2: { type: Number, required: true },
    sub3: { type: Number, required: true },
    sub4: { type: Number, required: true },
    sub5: { type: Number, required: true },
  },
  percentage: { type: Number }, 
}, { timestamps: true });

export default mongoose.model('Student', studentSchema);
