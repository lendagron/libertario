import Head from "next/head";
import CadastroPagamento from "../components/cadastroPagamentoPago/CadastroPagamento";
import { Header } from "../components/header/Header";
import { withSSRGuest } from "../utils/withSSRGuest";

export default function PagamentoKonkin() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Cadastro e Pagamento</title>
      </Head>
      <Header />
      <CadastroPagamento />
    </>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
