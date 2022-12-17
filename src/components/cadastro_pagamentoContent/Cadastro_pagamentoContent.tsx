import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastro_pagamentoContent.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Cadastro_pagamentoContent() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      login,
      cpf,
      email,
      phone,
      password,
    };
    await signUp(data);
  }
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Faça o seu cadastro</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <input
            type='text'
            placeholder='Nome'
            alt='Imagem de login'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Login'
            alt='Imagem de login'
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type='text'
            placeholder='Cpf'
            alt='Imagem de login'
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type='text'
            placeholder='E-mail'
            alt='Imagem de login'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Telefone'
            alt='Imagem de login'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>CADASTRAR</button>
        </form>
        <div>
          <Link href={"/"}>Voltar</Link>
        </div>
      </div>
    </main>
  );
}
/* {
  "name": "Cecilia Abshire",
  "login": "example.abshire",
  "cpf": "86254199505",
  "email": "example@example.net",
  "phone": "71988800033",
  "password": "12345678@"
} */
