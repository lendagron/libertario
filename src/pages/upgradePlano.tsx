import Head from "next/head";
import React from "react";
import { HeaderLogged } from "../components/headerLogged/HeaderLogged";
import UpgradePlanoContent from "../components/upgradePlanoContent/UpgradePlanoContent";

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
