import React, { FormEvent, useContext, useState } from "react";
import FormLogo from "../../../public/images/formlogo.png";
import styles from "./homepageContent.module.scss";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";

export function HomepageContent() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { sigIn } = useContext(AuthContext);

  async function handleSubmitSignIn(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      setIsLoading(true);
      await sigIn(data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { details } = error.response.data;
        const errorMessages = Object.entries(details)
          .map(
            ([key, value]) =>
              `${key}: ${Array.isArray(value) ? value.join("; ") : value}`
          )
          .join("; ");
        setSignInError(`Erro no envio de dados;  ${errorMessages}`);
      } else {
        setSignInError("Ocorreu um erro ao processar a solicitação.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className={styles.mainWrapper}>
      <div className={styles.mainContainer}>
        <h1>Acesse Agora</h1>
        <form onSubmit={handleSubmitSignIn}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <input
            type='text'
            placeholder='Email'
            alt='Campo de email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            alt='Campo de senha'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>ENTRAR</button>
          {isLoading && (
            <ClipLoader
              color={"#f3bf22"}
              loading={isLoading}
              size={50}
              className={styles.spinner}
            />
          )}
          {signInError && <p>{signInError}</p>}

          <Link href='/recuperar'>Esqueceu o usuário ou senha?</Link>
        </form>
        <div>
          <Link href={"/planos"}>Não é um membro ainda? Participe!</Link>
        </div>
      </div>
    </main>
  );
}
