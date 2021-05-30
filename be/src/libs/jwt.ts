import * as jwt from 'jsonwebtoken';

export const signToken = (id: string) => {
  const token = jwt.sign({ id }, process.env.SECRET);
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const user = jwt.verify(token, process.env.SECRET);
    return user;
  } catch {
    return null;
  }
};
