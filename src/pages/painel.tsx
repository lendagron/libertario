import Head from "next/head";
import PainelContent from "../components/painelContent/PainelContent";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";
import { Trilha } from "../components/trilha/Trilha";

interface Trail {
  id: number;
  name: string;
  description: string;
}
interface Props {
  trails: Trail[];
}
export default function Painel({ trails }: Props) {
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Painel</title>
      </Head>
      <PainelContent />
      <Trilha trails={trails} />
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  let trails = [];
  try {
    const response = await apiClient.get("/api/learning_trails");
    trails = response.data;
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      trails: trails,
    },
  };
});
