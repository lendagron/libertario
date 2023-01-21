import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/apiClient";
import { Trilha } from "../trilha/Trilha";
import styles from "./painelContent.module.scss";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerPainel.png";
import { CursoPainel } from "../cursoPainel/CursoPainel";
import { Crown } from "phosphor-react";

interface UserMe {
  name: string;
  login: string;
}

export default function PainelContent() {
  const { signOut } = useContext(AuthContext);
  const [userMe, setUserMe] = useState<UserMe>({ name: "", login: "" });

  useEffect(() => {
    api
      .get("/api/me")
      .then((response) => setUserMe(response.data))
      .catch((err) => console.error(err));
  }, []);

  function handleLogOut() {
    signOut();
  }

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
            <Link href={"/curso"}>Acessar os Cursos</Link>
            <a onClick={handleLogOut}>Deslogar</a>
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

          {/* <Trilha /> */}
        </div>
      </div>
    </>
  );
}
