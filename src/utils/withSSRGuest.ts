import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

export function withSSRGuest<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const redirect = ctx.query.redirect;
    const destination = redirect ? "/" + redirect : "/painel";
    if (cookies["CL.token"]) {
      return {
        redirect: {
          destination: destination,
          permanent: false,
        },
      };
    }
    return await fn(ctx);
  };
}
