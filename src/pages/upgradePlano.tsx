import Head from "next/head";
import React from "react";
import { HeaderLogged } from "../components/headerLogged/HeaderLogged";
import UpgradePlanoContent from "../components/upgradePlanoContent/UpgradePlanoContent";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function UpgradePlano() {
  const isPainel = false;
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Upgrade de Plano</title>
      </Head>
      <HeaderLogged isPainel={isPainel} />
      <UpgradePlanoContent />
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
