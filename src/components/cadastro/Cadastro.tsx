import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastro.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
      password,
    };
    try {
      setIsLoading(true);
      await signUp(data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { details } = error.response.data;
        const errorMessages = Object.entries(details)
          .map(
            ([key, value]) =>
              `${key}: ${Array.isArray(value) ? value.join("; ") : value}`
          )
          .join("; ");
        setSignInError(`Erro no envio de dadossss;  ${errorMessages}`);
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
        <h1>Faça o seu cadastro</h1>

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
            type='text'
            placeholder='Telefone'
            alt='Imagem de login'
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
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
          {signInError && <p>{signInError}</p>}
        </form>
        <div>
          <Link href={"javascript:history.back()"}>Voltar</Link>
        </div>
      </div>
    </main>
  );
}
