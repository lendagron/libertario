import Head from "next/head";
import Cadastro from "../components/cadastroMises/CadastroMises";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function CadastroMises() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro Plano Mises</title>
      </Head>
      <Header hasBack={true} />
      <Cadastro />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
