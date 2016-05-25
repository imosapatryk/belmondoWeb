import mongoose from 'mongoose';

const ResultSchema = new mongoose.Schema({
  id: Number,
  userId: Number,
  datetime: String,
  distance: Number,
  duration: String,
  discipline:String,
  max_speed: Number,
  avg_speed: Number,
  calories: Number,
});

export default mongoose.model('Result', ResultSchema);
