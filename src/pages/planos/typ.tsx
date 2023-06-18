import Head from "next/head";
import { Header } from "../../components/header/Header";
import PlanosTyp from "../../components/planosContent/PlanosTyp"

export default function Typ() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosTyp />
    </>
  );
}
