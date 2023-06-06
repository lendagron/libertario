import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { parseCookies } from "nookies";

export function withSSRAuth<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    if (!cookies["CL.token"]) {
      return {
        redirect: {
          destination: "/?redirect=" + ctx.resolvedUrl,
          permanent: false,
        },
      };
    }
    return await fn(ctx);
  };
}
