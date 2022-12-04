import Head from "next/head";
import React from "react";
import PainelContent from "../components/painelContent/PainelContent";

export default function Painel() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Painel</title>
        {/*  <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <PainelContent />
    </>
  );
}
