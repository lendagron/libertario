import Head from "next/head";
import Cadastro from "../components/cadastroKonkin/CadastroKonkin";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function CadastroKonkin() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro Plano Konkin</title>
      </Head>
      <Header hasBack={true} />
      <Cadastro />
    </>
  );
}

//TODO: Lembrar de tirar o Auth após lançar o plano Konkin
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
