import { Divider, Text, Spacer, Input, Button, Link } from '@nextui-org/react';
import React from 'react';
import { useRouter } from "next/router";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { FormEvent, useContext, useState, useRef } from "react";

interface Props {
  isShippingFilled: boolean,
  setIsShippingFilled: () => void,
}


export default function PlanosNoShipping({isShippingFilled,setIsShippingFilled}: Props) {

  const router = useRouter();
  const periodicity = router.query.periodicity;

  const cssLink = {fw: "black", textDecoration: "underline"};

  async function handleSubmit(){
    setIsShippingFilled(true);
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
            <Flex
              css={{gap: '2rem',
                '@xs':{
                  px: '5%'
                },
                '@md':{
                  px: '15%'
                },
                textAlign: "center"
              }}
              wrap={'nowrap'}
              direction={'column'}
              justify={'center'}
            >
              <Text>
                O plano escolhido não inclui a entrega de um livro capa dura exclusivo por mês. Caso deseje receber um novo livro por mês e diversos outros benefícios, você pode <Link css={cssLink} href={"/planos/konkin/" + periodicity} underline>mudar para o Plano Konkin</Link>.
              </Text>
              <Text>Para continuar com o Plano Hoppe, basta clicar em <b>Continuar</b>.</Text>
            </Flex>
            <Button
              onPress={handleSubmit}
              size="xl"
              css={{ mt: '$7', mb: '$12', color: 'black' }}
            >
              Continuar
            </Button>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
