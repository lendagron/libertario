import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastroPagamento.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";

export default function CadastroPagamento() {
  const [name, setName] = useState("");
  const [país, setPaís] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [número, setNúmero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [ddi, setDdi] = useState("");
  const [ddd, setDdd] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [planId, setPlanId] = useState("");
  const [frequency, setFrequency] = useState("");
  const [label, setLabel] = useState("");
  const [holder_name, setHolder_name] = useState("");
  const [card_number, setCard_number] = useState("");
  const [expiration_month, setExpiration_month] = useState("");
  const [expiration_year, setExpiration_year] = useState("");
  const [cvv, setCvv] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { payment } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
      customer_data: {
        cpf,
        address: {
          country: país,
          state: estado,
          city: cidade,
          neighborhood: bairro,
          street: rua,
          street_number: número,
          complement: complemento,
          zipcode: cep,
        },
        phone: {
          ddi: ddi,
          ddd: ddd,
          number: phone,
        },
      },
      plan_data: {
        id: planId,
        frequency: frequency,
      },
      card_data: {
        label: label,
        holder_name: holder_name,
        number: card_number,
        expiration_month: expiration_month,
        expiration_year: expiration_year,
        cvv: cvv,
      },
    };
    try {
      setIsLoading(true);
      await payment(data);
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
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Faça o seu cadastro e preencha os dados para pagamento</h1>
        {isLoading && (
          <ClipLoader
            color={"#f3bf22"}
            loading={isLoading}
            size={50}
            className={styles.spinner}
          />
        )}
        {signInError && <p>{signInError}</p>}
        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <input
            type='text'
            placeholder='Nome'
            alt='Campo nome'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='E-mail'
            alt='Campo e-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha'
            alt='Campo senha'
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='text'
            placeholder='Cpf'
            alt='Campo cpf'
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type='text'
            placeholder='País'
            alt='Imagem de endereço'
            onChange={(e) => setPaís(e.target.value)}
          />
          <input
            type='text'
            placeholder='Estado'
            alt='Imagem de endereço'
            onChange={(e) => setEstado(e.target.value)}
          />
          <input
            type='text'
            placeholder='Cidade'
            alt='Imagem de endereço'
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            type='text'
            placeholder='Bairro'
            alt='Imagem de endereço'
            onChange={(e) => setBairro(e.target.value)}
          />
          <input
            type='text'
            placeholder='Rua'
            alt='Imagem de endereço'
            onChange={(e) => setRua(e.target.value)}
          />
          <input
            type='text'
            placeholder='Número'
            alt='Imagem de endereço'
            onChange={(e) => setNúmero(e.target.value)}
          />
          <input
            type='text'
            placeholder='Complemento'
            alt='Imagem de endereço'
            onChange={(e) => setComplemento(e.target.value)}
          />
          <input
            type='text'
            placeholder='Cep'
            alt='Imagem de endereço'
            onChange={(e) => setCep(e.target.value)}
          />
          <input
            type='text'
            placeholder='DDI'
            alt='Imagem de login'
            onChange={(e) => setDdi(e.target.value)}
          />
          <input
            type='text'
            placeholder='DDD'
            alt='Imagem de login'
            onChange={(e) => setDdd(e.target.value)}
          />
          <input
            type='text'
            placeholder='Telefone'
            alt='Imagem de login'
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type='text'
            placeholder='Id do plano'
            alt='Imagem de login'
            onChange={(e) => setPlanId(e.target.value)}
          />
          <input
            type='text'
            placeholder='Frequência do plano'
            alt='Imagem de login'
            onChange={(e) => setFrequency(e.target.value)}
          />
          <input
            type='text'
            placeholder='Label do cartão'
            alt='Imagem de login'
            onChange={(e) => setLabel(e.target.value)}
          />
          <input
            type='text'
            placeholder='Nome do titular do cartão'
            alt='Imagem de login'
            onChange={(e) => setHolder_name(e.target.value)}
          />
          <input
            type='text'
            placeholder='Número do cartão'
            alt='Imagem de login'
            onChange={(e) => setCard_number(e.target.value)}
          />
          <input
            type='text'
            placeholder='Mês de expiração do cartão'
            alt='Imagem de login'
            onChange={(e) => setExpiration_month(e.target.value)}
          />
          <input
            type='text'
            placeholder='Ano de expiração do cartão'
            alt='Imagem de login'
            onChange={(e) => setExpiration_year(e.target.value)}
          />
          <input
            type='text'
            placeholder='Cvv do cartão'
            alt='Imagem de login'
            onChange={(e) => setCvv(e.target.value)}
          />
          <button type='submit'>ASSINAR</button>
        </form>
        <div>
          <Link href={"javascript:history.back()"}>Voltar</Link>
        </div>
      </div>
    </main>
  );
}
