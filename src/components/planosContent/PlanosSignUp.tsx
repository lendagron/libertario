import { Divider, Text, Spacer, Input, Button, Link } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from 'next/router';
import { CheckCircle } from "phosphor-react";
import { ClipLoader } from "react-spinners";
import { useContext, useState } from "react";

export default function PlanosSignUp() {
  const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInError, setSignInError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const { signUp } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
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
    <>
       <Flex
          css={{py: '$20', gap: '1rem', px: '$6'}}
          justify={'center'}
          wrap={'wrap'}
          direction={'column'}
          align={'center'}
       >
          <Flex
            css={{gap: '2rem',
              '@xs':{
                width: '75%'
              },
              '@md':{
                width: '40%'
              }
            }}
            wrap={'wrap'}
            direction={'column'}
            justify={'center'}
          >
            <Input
              placeholder='Nome Completo'
              label="Nome Completo"
              size="xl"
              css={{width: '100%'}}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder='E-mail'
              label="E-mail"
              size="xl"
              css={{width: '100%'}}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input.Password
              label="Senha"
              placeholder='Senha - 8 dígitos'
              size="xl"
              css={{width: '100%'}}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              onPress={handleSubmit}
              size="xl"
              css={{ mt: '$7', mb: '$12', color: 'black' }}
            >
              Cadastrar
            </Button>
            {isLoading && (
              <ClipLoader
                color={"#f3bf22"}
                loading={isLoading}
                size={50}
                css={{ mb: "1rem" }}
              />
            )}
            {confirm ? (
              <CheckCircle size={35} color='green' />
            ) : signInError && !confirm ? (
              <p>{signInError}</p>
            ) : null}
            <Flex
               justify={'center'}
               wrap={'wrap'}
               direction={'column'}
               align={'center'}
            >
              <Text size={20} weight="bold">
                Já possui cadastro? <Link href={"/?redirect=" + router.asPath} css={{weight: 'bold', textDecoration: 'underline'}} >Faça login aqui.</Link>
              </Text>
            </Flex>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
