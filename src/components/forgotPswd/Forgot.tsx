import React from "react";
import styles from "./forgot.module.scss";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Link from "next/link";
import { ClipLoader } from "react-spinners";
import { CheckCircle } from "phosphor-react";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signInError, setSignInError] = useState<string>("");
  const [confirm, setConfirm] = useState<boolean>(false);

  const { recover } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
    };

    try {
      setIsLoading(true);
      await recover(data);
      setConfirm(true);
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, details } = error.response.data;
        if (details) {
          const errorMessages = Object.entries(details)
            .map(([key, value]) => `${key}: ${value}`)
            .join("; ");
          setSignInError(`Erro no envio de dados: ${errorMessages}`);
        } else if (message) {
          setSignInError(message);
        } else {
          setSignInError("Ocorreu um erro ao processar a solicitação.");
        }
      } else {
        setSignInError("Ocorreu um erro ao processar a solicitação.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className={styles.container}>
        <h1>Recuperar Usuário ou Senha</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <label>Digite seu email para a recuperação:</label>
          <input
            type='text'
            placeholder='E-mail'
            alt='Imagem de login'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type='submit'>Enviar Email de Recuperação</button>
          {isLoading && (
            <ClipLoader
              color={"#f3bf22"}
              loading={isLoading}
              size={50}
              className={styles.spinner}
            />
          )}
          {confirm ? (
            <CheckCircle size={35} color='green' />
          ) : signInError && !confirm ? (
            <p>{signInError}</p>
          ) : null}
        </form>
        <div>
          <Link href={"javascript:history.back()"}>Voltar</Link>
        </div>
      </div>
    </main>
  );
}
