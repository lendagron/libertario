import React, { FormEvent } from "react";
import Image from "next/image";
import styles from "./changepswd.module.scss";
import FormLogo from "../../../public/images/formlogo.png";
import { useState } from "react";

export default function Changepswd() {
  const [password, setPassword] = useState("");
  //TODO: arrumar o handleSubmit. Add a função do context
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <main>
      <div className={styles.changecontainer}>
        <h1>Mudar Senha</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='logo mudar senha' width={70} height={70} />
          <label>Senha Atual: </label>
          <input type='password' placeholder='senha atual' />
          <label>Nova Senha: </label>
          <input type='password' placeholder='nova senha' />
          <label>Confirmar a Nova Senha: </label>
          <input type='password' placeholder='senha' />
          <button type='submit'>Confirmar</button>
        </form>
      </div>
    </main>
  );
}
