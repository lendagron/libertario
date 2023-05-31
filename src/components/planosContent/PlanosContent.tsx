import { Button, Card, Divider, Grid, Link, Text } from '@nextui-org/react';
import React from 'react';
import { Check } from "phosphor-react";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./planosContent.module.scss";

export default function PlanosContent() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
       <Flex
          css={{py: '$20', gap: '1rem', px: '$6'}}
          justify={'center'}
          wrap={'wrap'}
          direction={'column'}
          align={'center'}
       >
          <Flex direction={'column'} align={'center'}>
             <Text span css={{color: '$blue600'}}>
                Ajude a construir uma sociedade mais livre.
             </Text>
             <Text h1>Escolha seu Plano</Text>
          </Flex>

          <Flex
             css={{gap: '2rem', width: '100%'}}
             wrap={'wrap'}
             justify={'center'}
          >
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Mises
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>
                    Descrição Teste
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text css={{ display: 'contents' }} h2>
                R$ 10{' '}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>
                /mês
              </Text>
              <Button css={{ mt: '$7', mb: '$12'}} href="/" as="a">Acesse</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Vantagem 1
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Vantagem 2
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
