import { Transaction } from '../models/model.js';

// GET - get all transactions
export const getTransactions = async (req, res, next) => {
  let data = await Transaction.find({});
  return res.json(data);
};
//------------------------------

// POST - create a new transaction
export const createTransaction = async (req, res, next) => {
  const { name, type, amount } = req.body;
  if (!name || !type || !amount)
    return res.status(400).json('Please provide all necessary data!');

  const newTransaction = await new Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });

  newTransaction.save((err) => {
    if (!err) return res.json(newTransaction);
    return res.json(400).json({ message: 'Error while creating transaction' });
  });
};
//------------------------------

// DELETE - delete transaction by id

export const deleteTransaction = async (req, res, next) => {
  let id = req.body.id;
  if (!id) return res.status(400).json('Invalid request!');

  await Transaction.deleteOne({ _id: id }, (err) => {
    if (!err) return res.json('Record Deleted');
  })
    .clone()
    .catch((err) => res.json('Error while deleting selected Transaction'));
};

//------------------------------

// AGGREGATE - with "type" field from "categories" collection
// GET .../labels

export const getLabels = async (req, res, next) => {
  Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'categoriesInfo',
      },
    },
    {
      $unwind: '$categoriesInfo',
    },
  ])
    .then((result) => {
      let data = result.map((item) =>
        Object.assign(
          {},
          {
            _id: item._id,
            name: item.name,
            type: item.type,
            amount: item.amount,
            color: item.categoriesInfo['color'],
            date: item.date,
          }
        )
      );
      res.json(data);
    })
    .catch((error) => res.status(400).json('Lookup Collection Error'));
};
