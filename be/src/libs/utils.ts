import * as mongoose from 'mongoose';

export const getRandomNum = () =>
  Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0');

export const makeObjectId = (str: string) => {
  console.log(str, str.length);
  return mongoose.Types.ObjectId(str);
};
