import { Divider, Text, Spacer, Input, Button, Link } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import styles from "../cadastroHoppe/cadastroHoppe.module.scss";
import { FormEvent, useContext, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { CheckCircle } from "phosphor-react";
import cepPromise from "cep-promise";

interface Props {
  isShippingFilled: boolean;
  setIsShippingFilled: () => void;
}

export default function PlanosShipping({
  isShippingFilled,
  setIsShippingFilled,
}: Props) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState("");
  const [addError, setAddError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const inputRef = useRef(null);

  const { addAddress } = useContext(AuthContext);

  async function onChangeCep(e) {
    setCep(e);
    const cepNumbers = e.replace(".", "").replace("-", "");
    if (cepNumbers.length === 8) {
      cepPromise(cepNumbers)
        .then((address) => {
          setStreet(address.street);
          setNeighborhood(address.neighborhood);
          setCity(address.city);
          setState(address.state);
          setCountry("Brasil");
          setCepError("");
          inputRef.current.focus();
        })
        .catch((err) => {
          setCepError("CEP não encontrado");
        });
    } else {
      setStreet("");
      setNeighborhood("");
      setCity("");
      setState("");
      setCountry("");
    }
  }

  async function handleSubmit() {
    setIsShippingFilled(true);
  }

  async function handleSubmit2() {

    const data = {
      country: country,
      state: state,
      city: city,
      neighborhood: neighborhood,
      street: street,
      street_number: number,
      complement: complement,
      zipcode: cep,
    };
    try {
      setIsLoading(true);
      await addAddress(data);
      setConfirm(true);
      setIsShippingFilled(true);
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, details } = error.response.data;
        if (details) {
          const errorMessages = Object.entries(details)
            .map(([key, value]) => `${key}: ${value}`)
            .join("; ");
          setAddError(`Erro no envio de dados: ${errorMessages}`);
        } else if (message) {
          setAddError(message);
        } else {
          setAddError("Ocorreu um erro ao processar a solicitação.");
        }
      } else {
        setAddError("Ocorreu um erro ao processar a solicitação.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Flex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex
          css={{
            gap: "2rem",
            "@xs": {
              width: "75%",
            },
            "@md": {
              width: "40%",
            },
          }}
          wrap={"wrap"}
          direction={"column"}
          justify={"center"}
        >
          <Flex
            css={{ gap: "1rem" }}
            justify={"between"}
            wrap={"nowrap"}
            direction={"row"}
            align={"center"}
          >
            <Input
              placeholder='CEP'
              label='CEP'
              size='xl'
              css={{ width: "100%" }}
              required
              onChange={(e) => onChangeCep(e.target.value)}
              helperText={cepError}
              autoFocus
            />
            <Link
              size='md'
              underline
              target='_blank'
              href='https://buscacepinter.correios.com.br/app/endereco/index.php'
              css={{ color: "black", mt: "30px", width: "" }}
            >
              Não sei meu CEP
            </Link>
          </Flex>
          <Input
            placeholder='Rua, avenida, estrada, viela...'
            label='Endereço'
            size='xl'
            css={{ width: "100%" }}
            required
            onChange={(e) => setStreet(e.target.value)}
            value={street}
          />
          <Flex
            css={{ gap: "1rem" }}
            justify={"between"}
            wrap={"nowrap"}
            direction={"row"}
            align={"center"}
          >
            <Input
              placeholder='Nº'
              label='Nº'
              size='xl'
              css={{ width: "25%" }}
              required
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              ref={inputRef}
            />
            <Input
              placeholder='Complemento'
              label='Complemento'
              size='xl'
              css={{ width: "100%" }}
              onChange={(e) => setComplement(e.target.value)}
              value={complement}
            />
          </Flex>
          <Input
            placeholder='Bairro'
            label='Bairro'
            size='xl'
            css={{ width: "100%" }}
            required
            onChange={(e) => setNeighborhood(e.target.value)}
            value={neighborhood}
          />
          <Flex
            css={{ gap: "1rem" }}
            justify={"between"}
            wrap={"nowrap"}
            direction={"row"}
            align={"center"}
          >
            <Input
              placeholder='UF'
              label='UF'
              size='xl'
              css={{ width: "25%" }}
              required
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <Input
              placeholder='Cidade'
              label='Cidade'
              size='xl'
              css={{ width: "100%" }}
              required
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </Flex>
          <Button
            onPress={handleSubmit}
            size='xl'
            css={{ mt: "$7", mb: "$12", color: "black" }}
          >
            Continuar
          </Button>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
}
