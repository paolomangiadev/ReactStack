'use strict';
import mongoose from 'mongoose';

var ServicesSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

export default mongoose.model('Service', ServicesSchema);
