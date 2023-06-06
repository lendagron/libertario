<<<<<<< HEAD
import { Button, Card, Divider, Grid, Link, Text } from "@nextui-org/react";
import React from "react";
import { Check } from "phosphor-react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { useContext } from "react";
=======
import { Button, Card, Divider, Grid, Link, Text, Spacer } from '@nextui-org/react';
import React from 'react';
import { Check } from "phosphor-react";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { useContext, useState } from "react";
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063
import { AuthContext } from "../../context/AuthContext";
import styles from "./planosContent.module.scss";

export default function PlanosContent() {
  const { isAuthenticated } = useContext(AuthContext);
  const [planPeriod, setPlanPeriod] = useState('trimestral');
  const planButtonCss = {color: 'black', borderStyle: 'solid', borderColor: 'black'};
  const middlePlanButtonCss = {color: 'black', borderStyle: 'solid', borderColor: 'black', ml:'-2px', mr: '-2px'};

  return (
    <>
<<<<<<< HEAD
      <Flex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text span css={{ color: "$blue600" }}>
            Ajude a construir uma sociedade mais livre.
          </Text>
          <Text h1>Escolha seu Plano</Text>
        </Flex>
=======
       <Flex
          css={{py: '$20', gap: '1rem', px: '$6'}}
          justify={'center'}
          wrap={'wrap'}
          direction={'column'}
          align={'center'}
       >
          <Flex direction={'column'} align={'center'}>
             <Text span css={{color: '$gray600'}}>
                Ajude a construir uma sociedade mais livre.
             </Text>
             <Text h1>Escolha seu Plano</Text>
             <Spacer />
             <Button.Group size="lg">
              <Button
                onClick={() => {setPlanPeriod('mensal')}}
                ghost={planPeriod != 'mensal' ? true : false}
                css={planButtonCss}
              >
                Mensal
              </Button>
              <Button
                onClick={() => {setPlanPeriod('trimestral')}}
                ghost={planPeriod != 'trimestral' ? true : false}
                css={middlePlanButtonCss}
              >
                Trimestral
              </Button>
              <Button
                onClick={() => {setPlanPeriod('anual')}}
                ghost={planPeriod != 'anual' ? true : false}
                css={planButtonCss}
              >
                Anual
              </Button>
             </Button.Group>
             <Spacer />
          </Flex>
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063

        <Flex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Mises
                  </Text>
                </Grid>
                <Grid xs={12}>
<<<<<<< HEAD
                  <Text css={{ color: "$accents8" }}>Descrição Teste</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text css={{ display: "contents" }} h2>
                R$ 10{" "}
=======
                  <Text css={{ color: '$accents8', minHeight: '100px' }}>
                    Conteúdos introdutórios e gratuitos para entender os princípios básicos do libertarianismo e da Escola Austríaca.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: 'contents' }} h2>
                R$ 0{' '}
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /mês
              </Text>
<<<<<<< HEAD
              <Button css={{ mt: "$7", mb: "$12" }} href='/' as='a'>
                Acesse
              </Button>
=======
              <Button css={{ mt: '$7', mb: '$12', color: 'black'}} href="/" as="a">Acesse</Button>
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063

              <Divider />
              <Box as={"ul"}>
                <Flex as={"li"} css={{ py: "$2", gap: "$2" }} align={"center"}>
                  <Check />
<<<<<<< HEAD
                  <Text span css={{ color: "$accents8" }}>
                    Vantagem 1
=======
                  <Text span css={{ color: '$accents8' }}>
                    Cursos introdutórios
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Trilhas para direcionar o aprendizado
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063
                  </Text>
                </Flex>
                <Flex
                  as={"li"}
                  css={{ py: "$2", gap: "$2", textDecoration: "line-through" }}
                  align={"center"}
                >
                  <Check />
<<<<<<< HEAD
                  <Text span css={{ color: "$accents8" }}>
                    Vantagem 2
=======
                  <Text span css={{ color: '$accents8' }}>
                    Conteúdos referentes ao livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Acesso a todos os cursos
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Make of da capa do livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    10% de cashback em LUT
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Brindes exclusivos
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Hoppe
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8', minHeight: '100px' }}>
                    Conteúdos avançados para entender tudo sobre libertarianismo e Escola Austríaca.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: 'contents' }} h2>
                R$ {planPeriod == 'anual' ? '39 ' : (planPeriod == 'trimestral' ? '44 ' : '49 ')}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>
                /mês
              </Text>
              <Button css={{ mt: '$7', mb: '$12', color: 'black'}} href="/" as="a">Acesse</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Cursos introdutórios
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Trilhas para direcionar o aprendizado
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Conteúdos referentes ao livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Acesso a todos os cursos
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Make of da capa do livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    10% de cashback em LUT
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2', textDecoration: 'line-through' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Brindes exclusivos
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Konkin
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8', minHeight: '100px' }}>
                    Todos os meses um novo livro capa dura exclusivo, assim como inúmeros conteúdos complementares para te ajudar a aproveitar ao máximo as obras.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: 'contents' }} h2>
                R$ {planPeriod == 'anual' ? '71 ' : (planPeriod == 'trimestral' ? '80 ' : '89 ')}
              </Text>
              <Text css={{ display: 'contents', color: '$accents8' }}>
                /mês
              </Text>
              <Button css={{ mt: '$7', mb: '$12', color: 'black'}} href="/" as="a">Acesse</Button>

              <Divider />
              <Box as={'ul'}>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Cursos introdutórios
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2' }}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Trilhas para direcionar o aprendizado
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Conteúdos referentes ao livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Acesso a todos os cursos
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Make of da capa do livro do mês
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    10% de cashback em LUT
                  </Text>
                </Flex>
                <Flex
                  as={'li'}
                  css={{ py: '$2', gap: '$2'}}
                  align={'center'}
                >
                  <Check />
                  <Text span css={{ color: '$accents8' }}>
                    Brindes exclusivos
>>>>>>> 7bcd13ce8be08241a695da81de58d6da5ba17063
                  </Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
}
