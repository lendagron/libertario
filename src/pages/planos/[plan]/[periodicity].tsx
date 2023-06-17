import Head from "next/head";
import { Header } from "../../../components/header/Header";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../../context/AuthContext";
import PlanosProgress from "../../../components/planosContent/PlanosProgress";
import PlanosSignUp from "../../../components/planosContent/PlanosSignUp";
import PlanosShipping from "../../../components/planosContent/PlanosShipping";
import PlanosNoShipping from "../../../components/planosContent/PlanosNoShipping";
import PlanosPayment from "../../../components/planosContent/PlanosPayment";

export default function Planos() {
  const { isAuthenticated } = useContext(AuthContext);
  const [ isShippingFilled, setIsShippingFilled ] = useState(false);
  const router = useRouter();
  const plan = router.query.plan;

  const getStep = () => {
    switch (isAuthenticated) {
      case false:
          return 2;
        break;
      case true:
          switch (isShippingFilled) {
            case false:
              return 3;
              break;
            case true:
              return 4;
              break;
            default:
              return 3;
              break;
          }
          break;
      default:
        return 2;
        break;
    }
  }

  const getStepComponent = () => {
    switch (getStep()) {
      case 2:
        return <PlanosSignUp />;
        break;
      case 3:
        return plan === 'konkin' ?
          <PlanosShipping setIsShippingFilled={setIsShippingFilled} isShippingFilled={isShippingFilled} /> :
          <PlanosNoShipping setIsShippingFilled={setIsShippingFilled} isShippingFilled={isShippingFilled} />;
        break;
      case 4:
        return <PlanosPayment />;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Head>
        <title>Clube da Liberdade | Planos</title>
      </Head>
      <Header hasBack={true} />
      <PlanosProgress step={getStep()} />
      {getStepComponent()}
    </>
  );
}
