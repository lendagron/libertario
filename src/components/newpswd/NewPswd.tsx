import React, { FormEvent } from "react";
import Image from "next/image";
import Link from 'next/link'
import styles from "./newpswd.module.scss";
import FormLogo from "../../../public/images/formlogo.png";
import { useState } from "react";

export default function NewPswd() {
  const [password, setPassword] = useState("");

  //TODO: arrumar o handleSubmit. Add a função do context
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
}

  return (
    <main>
      <div className={styles.container}>
        <h1>Confirmar Nova Senha</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={70} height={70} />
          <label>Digite sua nova senha:</label>
          <input
            type='password'
            placeholder='senha'
            alt='Imagem de login'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirme a nova senha:</label>
          <input
            type='password'
            placeholder='senha'
            alt='Imagem de login'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Confirmar Senha</button>
        </form>
      </div>
    </main>
  );
}
