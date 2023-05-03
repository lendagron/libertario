import React from "react";
import Head from "next/head";
import Changepswd from "../components/changepswd/Changepswd";
import { HeaderLogged } from "../components/headerLogged/HeaderLogged";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function trocar() {
  return (
    <>
      <Head>
        <title>Clube da liberdade | Mudar Senha</title>
      </Head>
      <HeaderLogged isPainel={false} />
      <Changepswd />
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
