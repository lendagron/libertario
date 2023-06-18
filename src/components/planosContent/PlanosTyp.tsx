import { Divider, Text, Spacer, Link } from '@nextui-org/react';
import React from 'react';
import { Confetti } from "phosphor-react";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { useContext, useState } from "react";


export default function PlanosTyp() {

  return (
    <>
       <Flex
          css={{py: '$16', gap: '1rem', px: '$6'}}
          justify={'center'}
          wrap={'wrap'}
          direction={'row'}
       >
          <Flex
             css={{gap: '2rem', width: '50%'}}
             wrap={'wrap'}
             align={'center'}
             direction={'column'}
          >
            <Confetti size={128} />
            <Text size="$3xl" b>Obrigado!</Text>
            <Text>Estamos verificando o seu pagamento e a plataforma estará liberada em no máximo 48 horas!</Text>
            <Text>Enquanto espera, <Link href="/painel" underline css={{fontWeight:"bold",textDecoration:"underline"}}>você pode continuar explorando nossos conteúdos gratuitos</Link>.</Text>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
