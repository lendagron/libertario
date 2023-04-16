import React from "react";
import Head from "next/head";
import { Header } from "../components/header/Header";
import Forgot from "../components/forgotPswd/Forgot";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function recuperar() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Recuperar Usuário & Senha</title>
      </Head>
      <Header hasBack={true} />
      <Forgot />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
