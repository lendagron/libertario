import Head from "next/head";
import { Header } from "../../../components/header/Header";
import PlanosProgress from "../../../components/planosContent/PlanosProgress";
import PlanosSignUp from "../../../components/planosContent/PlanosSignUp";

export default function Planos() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosProgress />
      <PlanosSignUp />
    </>
  );
}
