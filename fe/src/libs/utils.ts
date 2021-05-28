import { GetServerSidePropsContext } from 'next';
import Cookies from 'next-cookies';

export const getCookies = (ctx: GetServerSidePropsContext) => {
  const { jwt } = Cookies(ctx);
  return jwt;
};
