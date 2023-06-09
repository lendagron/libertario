import Head from "next/head";
import { Header } from "../../../components/header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import PlanosProgress from "../../../components/planosContent/PlanosProgress";
import PlanosSignUp from "../../../components/planosContent/PlanosSignUp";
import PlanosShipping from "../../../components/planosContent/PlanosShipping";

export default function Planos() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosProgress step={isAuthenticated ? 3 : 2} />
      {isAuthenticated ? <PlanosShipping /> : <PlanosSignUp />}
    </>
  );
}
