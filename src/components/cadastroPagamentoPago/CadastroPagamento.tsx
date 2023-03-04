import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastroPagamento.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function CadastroPagamento() {
  const [name, setName] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const { payment } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      endereco,
      cpf,
      email,
      phone,
      password,
    };
    await payment(data);
  }
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Faça o seu cadastro e preencha os dados para pagamento</h1>
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
            placeholder='Endereço'
            alt='Imagem de endereço'
            onChange={(e) => setEndereco(e.target.value)}
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
          <button type='submit'>ASSINAR PLANO</button>
        </form>
        <div>
          <Link href={"javascript:history.back()"}>Voltar</Link>
        </div>
      </div>
    </main>
  );
}
