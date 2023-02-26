import React, { FormEvent, useContext, useState } from "react";
import FormLogo from "../../../public/images/formlogo.png";
import styles from "./homepageContent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../context/AuthContext";

export function HomepageContent() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const { sigIn, signUp } = useContext(AuthContext);

  function handleSetIsLogin() {
    setIsLogin(!isLogin);
  }

  async function handleSubmitSignIn(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await sigIn(data);
  }

  async function handleSubmitSignUp(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
      password,
    };
    await signUp(data);
  }

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        {isLogin ? (
          <>
            <h1>Acesse Agora</h1>
            <form onSubmit={handleSubmitSignIn}>
              <Image
                src={FormLogo}
                alt='Logo de login'
                width={75}
                height={75}
              />
              <input
                type='text'
                placeholder='Email'
                alt='Campo de email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Senha'
                alt='Campo de senha'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>ENTRAR</button>
              <a href=''>Esqueceu o usuário ou senha?</a>
            </form>
          </>
        ) : (
          <>
            <h1>Acesse Agora</h1>
            <form onSubmit={handleSubmitSignUp}>
              <Image
                src={FormLogo}
                alt='Logo de login'
                width={75}
                height={75}
              />
              <input
                type='text'
                placeholder='Nome'
                alt='Campo de nome'
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='text'
                placeholder='E-mail'
                alt='Campo de email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='text'
                placeholder='Telefone'
                alt='Campo de telefone'
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type='password'
                placeholder='Senha'
                alt='Campo de senha'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>CADASTRAR</button>
            </form>
          </>
        )}
        {isLogin ? (
          <div>
            <a onClick={handleSetIsLogin}>Não é um membro ainda? Participe!</a>
            <Link href={"/planos"}>Conheça os nossos planos</Link>
          </div>
        ) : (
          <div>
            <a onClick={handleSetIsLogin}>Já é um membro? Entre agora!</a>
            <Link href={"/planos"}>Conheça os nossos planos</Link>
          </div>
        )}
      </div>
    </main>
  );
}
