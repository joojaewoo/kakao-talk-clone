import { GetServerSidePropsContext } from 'next';
import Cookies from 'next-cookies';

export const getCookies = (ctx: GetServerSidePropsContext) => {
  const { jwt } = Cookies(ctx);
  return jwt;
};

export const throttle = (() => {
  let timer = null;
  return (func: () => void | Promise<boolean | void>, delay: number) => {
    if (!timer) {
      timer = setTimeout(async () => {
        func();
        timer = null;
      }, delay);
    }
  };
})();
