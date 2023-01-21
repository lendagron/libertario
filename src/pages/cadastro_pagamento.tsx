import Head from "next/head";
import React from "react";
import Cadastro_pagamentoContent from "../components/cadastro_pagamentoContent/Cadastro_pagamentoContent";

export default function Cadastro_pagamento() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro e Pagamento </title>
      </Head>
      <Cadastro_pagamentoContent />
    </>
  );
}
