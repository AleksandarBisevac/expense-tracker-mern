import { Categories } from '../models/model.js';

export const getCategories = async (req, res, next) => {
  let data = await Categories.find({});
  let filteredData = await data.map((item) =>
    Object.assign({}, { type: item.type, color: item.color })
  );
  return res.json(filteredData);
};

//post
export const createCategories = async (req, res, next) => {
  const Create = new Categories({
    type: req.body.type,
    color: req.body.color,
  });

  await Create.save((err) => {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` });
  });
};
