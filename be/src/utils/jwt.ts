import * as jwt from 'jsonwebtoken';

export const signToken = (id: string) => {
  const token = jwt.sign({ id }, 'secret');
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const user = jwt.verify(token, 'secret');
    return user;
  } catch {
    return null;
  }
};
