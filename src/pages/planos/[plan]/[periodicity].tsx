import Head from "next/head";
import { Header } from "../../../components/header/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import PlanosProgress from "../../../components/planosContent/PlanosProgress";
import PlanosSignUp from "../../../components/planosContent/PlanosSignUp";
import PlanosShipping from "../../../components/planosContent/PlanosShipping";
import PlanosPayment from "../../../components/planosContent/PlanosPayment";

export default function Planos() {
  const { isAuthenticated } = useContext(AuthContext);
  const [ isShippingFilled, setIsShippingFilled ] = useState(false);
  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosProgress step={isAuthenticated ? (isShippingFilled ? 4 : 3) : 2} />
      {isAuthenticated ?
        (isShippingFilled ? <PlanosPayment /> : <PlanosShipping setIsShippingFilled={setIsShippingFilled} isShippingFilled={isShippingFilled} />) :
        <PlanosSignUp />
      }
    </>
  );
}
