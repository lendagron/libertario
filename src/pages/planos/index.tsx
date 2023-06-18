import Head from "next/head";
import { Header } from "../../components/header/Header";
import PlanosContent from "../../components/planosContent/PlanosContent";

export default function Planos() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosContent />
    </>
  );
}
