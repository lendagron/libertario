import Link from "next/link";
import styles from "./painelContent.module.scss";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerPainel.png";
import { CursoPainel } from "../cursoPainel/CursoPainel";
import { Crown } from "phosphor-react";

interface UserMe {
  name: string;
  id: number;
  email: string;
}

interface Props {
  userMe: UserMe;
}

export default function PainelContent({ userMe }: Props) {
  return (
    <>
      <Image src={bannerimg} alt='Logo' className={styles.banner} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>Olá, {userMe.name}</h2>
          <p>O seu plano é: Mises</p>
          <div className={styles.buttonsContainer}>
            <Link href={"/upgradePlano"}>
              <Crown size={25} weight='fill' />
              <span>Fazer Upgrade</span>
            </Link>
          </div>
          <div className={styles.cursosContainer}>
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
          </div>
        </div>
      </div>
    </>
  );
}
