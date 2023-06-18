import {
  Divider,
  Text,
  Spacer,
  Input,
  Button,
  Link,
  Collapse,
  Checkbox,
  Image,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import styles from "../cadastroHoppe/cadastroHoppe.module.scss";
import { FormEvent, useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import { ClipLoader } from "react-spinners";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import {
  CheckCircle,
  CreditCard,
  Barcode,
  Bank,
  CurrencyBtc,
  CaretRight,
  ClipboardText,
} from "phosphor-react";
import cepPromise from "cep-promise";
import { createStaticPix, hasError } from "pix-utils";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

export default function PlanosPayment() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [sameAddress, setSameAddress] = useState<boolean>(true);
  const [pixImageSrc, setPixImageSrc] = useState<string>("");
  const [pixCopy, setPixCopy] = useState<string>("");

  const inputRef = useRef(null);
  const router = useRouter();

  const plan = router.query.plan;
  const periodicity = router.query.periodicity;

  const plansPrices = {
    hoppe: {
      mensal: 49.90,
      trimestral: 134.70,
      anual: 478.80,
    },
    konkin: {
      mensal: 89.90,
      trimestral: 239.70,
      anual: 898.80,
    },
  }

  const cryptoCheckOuts = {
    hoppe: {
      trimestral: "b57b8180-1635-454b-b199-f83d8ede7295",
      anual: "1bfb5299-c4f4-4eaa-a20b-67a12954bc3f",
    },
    konkin: {
      trimestral: "4f768366-f4c6-466f-9650-bfb769de902f",
      anual: "",
    },
  }


  const { updateAdress } = useContext(AuthContext);

  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

  const pix = createStaticPix({
    merchantName: 'Universidade Libertaria',
    merchantCity: 'Sao Paulo',
    pixKey: '26404090000170',
    infoAdicional: 'Clube da Liberdade',
    transactionAmount: plansPrices[plan][periodicity],
  });

  useEffect(() => {
    const getPixImage = async () => {
      try {
        const pixImage = await pix.toImage();
        setPixImageSrc(pixImage);
      } catch (error) {
        console.log(error);
      }
    };
    const getPixCopy = async () => {
      try {
        if (!hasError(pix)) {
          const pixCopy = await pix.toBRCode();
          setPixCopy(pixCopy);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPixImage();
    getPixCopy();
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  function AddressInput() {
    return (
      <>
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
      </>
    );
  }

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
    router.push("/planos/typ");
  }
  async function handleSubmit2(event: FormEvent) {
    const data = {
      name,
      email,
      password,
      customer_data: {
        cpf,
        address: {
          country: country,
          state: state,
          city: city,
          neighborhood: neighborhood,
          street: street,
          street_number: number,
          complement: complement,
          zipcode: cep,
        },
      },
    };
    try {
      setIsLoading(true);
      await payment(data);
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
          <Collapse.Group splitted>
            <Collapse
              contentLeft={<CreditCard size={32} />}
              title='Cartão de Crédito'
              subtitle='Pague no cartão de crédito.'
              arrowIcon={<CaretRight size={24} />}
              shadow
            >
              <Input
                size='xl'
                label='CPF'
                placeholder='CPF'
                css={{ width: "100%" }}
              />
              <Spacer y={2} />
              <Input
                {...getCardNumberProps()}
                placeholder='0000 0000 0000 0000'
                label='Número do Cartão'
                inputRef={getCardNumberProps().ref}
                state={
                  erroredInputs.cardNumber && touchedInputs.cardNumber
                    ? "danger"
                    : undefined
                }
                validationText={
                  touchedInputs.cardNumber && erroredInputs.cardNumber
                }
                size='xl'
                css={{ width: "100%" }}
              />
              <Flex
                css={{ gap: "1rem" }}
                justify={"between"}
                wrap={"nowrap"}
                direction={"row"}
                align={"center"}
              >
                <Input
                  {...getExpiryDateProps()}
                  label='Expiry date'
                  inputRef={getExpiryDateProps().ref}
                  state={
                    erroredInputs.expiryDate && touchedInputs.expiryDate
                      ? "danger"
                      : undefined
                  }
                  validationText={
                    touchedInputs.expiryDate && erroredInputs.expiryDate
                  }
                  size='xl'
                  css={{ width: "50%" }}
                />
                <Input
                  {...getCVCProps()}
                  placeholder='123'
                  label='CVC'
                  inputRef={getCVCProps().ref}
                  state={
                    erroredInputs.cvc && touchedInputs.cvc
                      ? "danger"
                      : undefined
                  }
                  validationText={touchedInputs.cvc && erroredInputs.cvc}
                  size='xl'
                  css={{ width: "50%" }}
                />
              </Flex>
              <Spacer y={2} />
              <Checkbox
                isSelected={sameAddress}
                onChange={(checked) => setSameAddress(checked)}
                color='warning'
              >
                Endereço de cobrança igual ao de entrega
              </Checkbox>
              {sameAddress ? "" : <AddressInput />}
              <Spacer />
              <Button
                onPress={handleSubmit}
                size='xl'
                css={{ mt: "$7", mb: "$12", color: "black", width: "100%" }}
              >
                Pagar com Cartão
              </Button>
            </Collapse>
            { periodicity === 'mensal' ?
              <Text css={{mt: "$20"}}>
                Os meios de pagamento abaixo não estão disponíveis no plano mensal. Mude para o <Link href={"/planos/" + plan + "/trimestral"} css={{textDecoration:"underline", tw:"bold"}} underline>plano trimestral</Link> {plan === 'hoppe' ? <>ou para o <Link href={"/planos/" + plan + "/anual"} css={{textDecoration:"underline", tw:"bold"}} underline >plano anual</Link> </>:''}para utilizá-los.
              </Text> :
              ''
            }
            <Collapse
              contentLeft={<CurrencyBtc size={32} color={ periodicity === 'mensal' ? "gray" : 'black' } />}
              title='Cripto'
              subtitle='Pague em BTC, ETH, LTC, USDT, entre outras.'
              arrowIcon={<CaretRight size={24} color={ periodicity === 'mensal' ? "gray" : 'black' } />}
              shadow
              disabled={ periodicity === 'mensal' ? true : false }
            >
              <Button
                href={"https://commerce.coinbase.com/checkout/" + cryptoCheckOuts[plan][periodicity] }
                size='xl'
                css={{ mt: "$7", mb: "$12", color: "black", width: "100%" }}
                as="a"
              >
                Pagar com Cripto
              </Button>
              <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
              </script>
            </Collapse>
            <Collapse
              contentLeft={<Bank size={32} color={ periodicity === 'mensal' ? "gray" : 'black' } />}
              title='PIX'
              subtitle='Pague utiizando o PIX.'
              arrowIcon={<CaretRight size={24} color={ periodicity === 'mensal' ? "gray" : 'black' } />}
              shadow
              disabled={ periodicity === 'mensal' ? true : false }
            >
              <Flex
                css={{ py: "$6", gap: "1rem", px: "$6" }}
                justify={"center"}
                wrap={"wrap"}
                direction={"column"}
                align={"center"}
              >
                <Text css={{ width: "75%", textAlign: "center" }} size='$xl'>
                  Pague utilizando o QRCode ou copie e cole o link de pagamento
                  abaixo. Após realizar o pagamento, clique em "Confirmar
                  Pagamento".
                </Text>
                <Image src={pixImageSrc} width={200} height={200} />
                <Tooltip
                  content={"Pix copiado com sucesso"}
                  color='success'
                  trigger='click'
                  placement='bottom'
                >
                  <Input
                    readOnly
                    contentRight={<ClipboardText size={16} />}
                    contentClickable={true}
                    contentRightStyling
                    size='xl'
                    value={pixCopy}
                    onFocus={(e) => copyToClipboard(e.target.value)}
                  />
                </Tooltip>
                <Spacer />
                <Button
                  onPress={handleSubmit}
                  size='xl'
                  css={{ mt: "$7", mb: "$12", color: "black", width: "100%" }}
                >
                  Confirmar Pagamento
                </Button>
              </Flex>
            </Collapse>
            <Collapse
              contentLeft={<Barcode size={32} color="gray" />}
              title='Boleto'
              subtitle='Pague no boleto bancário. EM BREVE.'
              arrowIcon={<CaretRight size={24} color="gray" />}
              shadow
              disabled
            >
              <Input
                size='xl'
                label='CPF'
                placeholder='CPF'
                css={{ width: "100%" }}
              />
              <Spacer y={2} />
              <Checkbox
                isSelected={sameAddress}
                onChange={(checked) => setSameAddress(checked)}
                color='warning'
              >
                Endereço de cobrança igual ao de entrega
              </Checkbox>
              {sameAddress ? "" : <AddressInput />}
              <Spacer />
              <Button
                onPress={handleSubmit}
                size='xl'
                css={{ mt: "$7", mb: "$12", color: "black", width: "100%" }}
              >
                Gerar Boleto
              </Button>
            </Collapse>
          </Collapse.Group>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
}
