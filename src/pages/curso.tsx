import Head from "next/head";
import React from "react";
import CursoContent from "../components/curso/CursoContent";

export default function Curso() {
  return (
    <div>
      <Head>
        <title>Clube da Liberdade | Curso</title>
        {/*  <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <CursoContent />
    </div>
  );
}
