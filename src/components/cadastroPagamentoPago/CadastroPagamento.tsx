import Link from "next/link";
import FormLogo from "../../../public/images/formlogo.png";
import Image from "next/image";
import styles from "./cadastroPagamento.module.scss";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

//TODO: Botar um select para escolher país, estado e cidade.
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
  console.log("país:", país);
  console.log("estado:", estado);
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Faça o seu cadastro e preencha os dados para pagamento</h1>

        <form onSubmit={handleSubmit}>
          <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
          <div className={styles.userContainer}>
            <input
              type='text'
              placeholder='Nome'
              alt='Campo nome'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='E-mail'
              alt='Campo e-mail'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.passwordContainer}>
              <label htmlFor='password'>
                A senha deve conter pelo menos 8 dígitos
              </label>
              <input
                type='password'
                name='password'
                placeholder='Senha'
                alt='Campo senha'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <input
              type='text'
              placeholder='Cpf'
              alt='Campo cpf'
              required
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className={styles.selectContainer}>
            <div className={styles.countryContainer}>
              <label htmlFor=''>País para o envio</label>
              <CountryDropdown
                value={país}
                onChange={(val) => setPaís(val)}
                classes='form-control'
                defaultOptionLabel='Selecione o país'
                whitelist={["BR"]}
                valueType='short'
              />
            </div>
            <div className={styles.regionContainer}>
              <label htmlFor=''>Selecione o estado</label>
              <RegionDropdown
                country={país}
                value={estado}
                onChange={(val) => setEstado(val)}
                classes='form-control'
                defaultOptionLabel='Selecione o estado'
                valueType='short'
                countryValueType='short'
              />
            </div>
          </div>
          <div className={styles.addressContainer}>
            <input
              type='text'
              placeholder='Cep'
              alt='Imagem de endereço'
              required
              onChange={(e) => setCep(e.target.value)}
            />
            <input
              type='text'
              placeholder='Cidade'
              alt='Imagem de endereço'
              required
              onChange={(e) => setCidade(e.target.value)}
            />
            <input
              type='text'
              placeholder='Bairro'
              alt='Imagem de endereço'
              required
              onChange={(e) => setBairro(e.target.value)}
            />
            <input
              type='text'
              placeholder='Rua'
              alt='Imagem de endereço'
              required
              onChange={(e) => setRua(e.target.value)}
            />
            <input
              type='text'
              placeholder='Número'
              alt='Imagem de endereço'
              required
              onChange={(e) => setNúmero(e.target.value)}
            />
            <input
              type='text'
              placeholder='Complemento'
              alt='Imagem de endereço'
              required
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className={styles.phoneContainer}>
            <input
              type='text'
              placeholder='DDI'
              required
              alt='Imagem de login'
              onChange={(e) => setDdi(e.target.value)}
            />
            <input
              type='text'
              placeholder='DDD'
              alt='Imagem de login'
              required
              onChange={(e) => setDdd(e.target.value)}
            />
            <input
              type='text'
              placeholder='Telefone'
              alt='Imagem de login'
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.planContainer}>
            <input
              type='text'
              placeholder='Id do plano'
              alt='Imagem de login'
              required
              onChange={(e) => setPlanId(e.target.value)}
            />
            <select
              name='frequency'
              placeholder='Frequência do plano'
              required
              onChange={(e) => setFrequency(e.target.value)}
            >
              <option value=''>Selecione a frequência</option>
              <option value='monthly'>Mensal</option>
              <option value='yearly'>Anual</option>
            </select>
          </div>
          <div className={styles.cardContainer}>
            <input
              type='text'
              placeholder='Label do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setLabel(e.target.value)}
            />
            <input
              type='text'
              placeholder='Nome do titular do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setHolder_name(e.target.value)}
            />
            <input
              type='text'
              placeholder='Número do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setCard_number(e.target.value)}
            />
            <input
              type='text'
              placeholder='Mês de expiração do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setExpiration_month(e.target.value)}
            />
            <input
              type='text'
              placeholder='Ano de expiração do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setExpiration_year(e.target.value)}
            />
            <input
              type='text'
              placeholder='Cvv do cartão'
              alt='Imagem de login'
              required
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button type='submit'>ASSINAR</button>
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
