import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastroMises.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { CheckCircle } from "phosphor-react";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    try {
      setIsLoading(true);
      await signUp(data);
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
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Faça o seu cadastro no plano Mises</h1>

        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <input
            type='text'
            placeholder='Nome'
            alt='Imagem de login'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='E-mail'
            alt='Imagem de login'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha - deve conter pelo menos 8 dígitos'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>CADASTRAR</button>
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
