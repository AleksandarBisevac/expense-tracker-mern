import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// categories -> field -> [type, color]

//transactions -> filed -> [name,type, amount,date]

const categoriesModel = new Schema({
  type: { type: String, default: 'investment' },
  color: { type: String, default: '#9d4edd' },
});

const transactionModel = new Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'investment' },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

export const Categories = mongoose.model('categories', categoriesModel);
export const Transaction = mongoose.model('transaction', transactionModel);
