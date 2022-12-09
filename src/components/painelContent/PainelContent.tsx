import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import { Trilha } from "../trilha/Trilha";
import styles from "./painelContent.module.scss";
import Image from "next/image";
import bannerimg from "../../../public/images/bannerPainel.png";
import { CursoPainel } from "../cursoPainel/CursoPainel";
import { Crown } from "phosphor-react";

export default function PainelContent() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/api/me")
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Image src={bannerimg} alt='Logo' className={styles.banner} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/*  <h2>{user?.login}</h2> */}
          <h3>Olá, User</h3>
          <p>O seu plano é: Rothbard</p>
          <div className={styles.buttonsContainer}>
            <Link href={"/upgradePlano"}>
              <Crown size={25} weight='fill' />
              <span>Fazer Upgrade</span>
            </Link>
            <Link href={"/curso"}>Acessar os Cursos</Link>
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

          <Trilha />
        </div>
      </div>
    </>
  );
}
