import Head from "next/head";
import Cadastro from "../components/cadastroHoppe/CadastroHoppe";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function CadastroHoppe() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro Plano Hoppe</title>
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
