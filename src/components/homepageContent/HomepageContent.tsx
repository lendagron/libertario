import React, { FormEvent, useContext, useState } from "react";
import FormLogo from "../../../public/images/formlogo.png";
import styles from "./homepageContent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../context/AuthContext";

export function HomepageContent() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { sigIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      login,
      password,
    };
    await sigIn(data);
  }

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <h1>Acesse Agora</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <input
            type='text'
            placeholder='Usuário'
            alt='Imagem de login'
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>LOGIN</button>
          <a href=''>Esqueceu o usuário ou senha?</a>
        </form>
        <div>
          <Link href={"/planos"}>Não é um membro ainda? Participe!</Link>
        </div>
      </div>
    </main>
  );
}
