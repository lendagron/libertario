import Link from "next/link";
import styles from "./painelContent.module.scss";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerPainel.png";
import { CursoPainel } from "../cursoPainel/CursoPainel";
import { Crown } from "phosphor-react";

type Plan = {
  id: number;
  name: string;
};
type Subscriptions = {
  id: number;
  user_id: number;
  plan_id: number;
  plan: Plan;
};
type UserMe = {
  name: string;
  id: number;
  email: string;
  subscriptions: Subscriptions[];
};
interface Props {
  userMe: UserMe;
}

export default function PainelContent({ userMe }: Props) {
  const lastId = userMe.subscriptions.length - 1;

  return (
    <>
      <Image src={bannerimg} alt='Logo' className={styles.banner} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>Olá, {userMe.name}</h2>
          <p>O seu plano é: {userMe.subscriptions[lastId].plan.name}</p>
          <div className={styles.buttonsContainer}>
            <Link href={"/upgradePlano"}>
              <Crown size={25} weight='fill' />
              <span>Fazer Upgrade</span>
            </Link>
          </div>
          {/* <div className={styles.cursosContainer}>
            <CursoPainel
              titulo='Último Curso Assistido'
              subtitulo='Teoria Legal Libertária'
              imagem='imagem'
              botao='Começar novo Curso'
            />
            <CursoPainel
              titulo='Última Aula Assistida'
              subtitulo='Inalienabilidade'
              imagem='imagem'
              botao='Continuar Aula'
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
