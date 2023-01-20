import Head from "next/head";
import PainelContent from "../components/painelContent/PainelContent";

export default function Painel() {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Painel</title>
      </Head>
      <PainelContent />
    </>
  );
}

/* 
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const response = await api.get("/api/learning_trails");
    console.log(response);
    return {
      props: {
        trails: response.data,
      },
    };
  } catch (err) {
    console.log("erro");
    return {
      props: {
        trails: [],
      },
    };
  }
}; */
