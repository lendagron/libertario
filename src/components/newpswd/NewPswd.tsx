import React, { FormEvent, useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./newpswd.module.scss";
import FormLogo from "../../../public/images/formlogo.png";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";
import { CheckCircle } from "phosphor-react";

export default function NewPswd() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [solicitation, setSolicitation] = useState("t");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const { solicitation } = router.query;
    if (solicitation) {
      setSolicitation(solicitation.toString());
    }
  }, [router.query]);

  const { redefinePassword } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      password,
      password_confirmation,
      solicitation,
    };

    try {
      setIsLoading(true);
      await redefinePassword(data);
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
      setConfirm(true);
    }
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
            placeholder='confirmar senha'
            alt='Imagem de login'
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
          <button type='submit'>Confirmar Senha</button>
          {isLoading && (
            <ClipLoader
              color={"#f3bf22"}
              loading={isLoading}
              size={50}
              className={styles.spinner}
            />
          )}
          {confirm && <CheckCircle size={35} color='green' />}
          {signInError && <p>{signInError}</p>}
        </form>
      </div>
    </main>
  );
}
