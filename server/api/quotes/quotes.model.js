'use strict';
import mongoose from 'mongoose';

var ChatSchema = new mongoose.Schema({
  name: String,
  sender: String,
  subject: String,
  message: String
});

export default mongoose.model('Chat', ChatSchema);
