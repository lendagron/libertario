import React, { FormEvent, useContext } from "react";
import Image from "next/image";
import styles from "./changepswd.module.scss";
import FormLogo from "../../../public/images/formlogo.png";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";

export default function Changepswd() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { changePassword } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      password,
      password_confirmation,
    };

    try {
      setIsLoading(true);
      await changePassword(data);
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
    <main>
      <div className={styles.changecontainer}>
        <h1>Mudar Senha</h1>
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='logo mudar senha' width={70} height={70} />
          <label>Nova Senha: </label>
          <input
            type='password'
            placeholder='nova senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirmar a Nova Senha: </label>
          <input
            type='password'
            placeholder='confirmar senha'
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
          <button type='submit'>Confirmar</button>
          {isLoading && (
            <ClipLoader
              color={"#f3bf22"}
              loading={isLoading}
              size={50}
              className={styles.spinner}
            />
          )}
          {signInError && <p>{signInError}</p>}
        </form>
      </div>
    </main>
  );
}
