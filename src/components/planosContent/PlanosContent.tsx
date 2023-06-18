import {
  Button,
  Card,
  Divider,
  Grid,
  Link,
  Text,
  Spacer,
} from "@nextui-org/react";
import React from "react";
import { Check } from "phosphor-react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PlanosContentBenefits from "./PlanosContentBenefits"

export default function PlanosContent() {
  const { isAuthenticated } = useContext(AuthContext);
  const [planPeriod, setPlanPeriod] = useState("trimestral");
  const planButtonCss = {
    color: "black",
    borderStyle: "solid",
    borderColor: "black",
  };
  const middlePlanButtonCss = {
    color: "black",
    borderStyle: "solid",
    borderColor: "black",
    ml: "-2px",
    mr: "-2px",
  };

  return (
    <>
      <Flex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <Flex direction={"column"} align={"center"}>
          <Text span css={{ color: "$gray600" }}>
            Ajude a construir uma sociedade mais livre.
          </Text>
          <Text h1>Escolha seu Plano</Text>
          <Spacer />
          <Button.Group size='lg'>
            <Button
              onClick={() => {
                setPlanPeriod("mensal");
              }}
              ghost={planPeriod != "mensal" ? true : false}
              css={planButtonCss}
            >
              Mensal
            </Button>
            <Button
              onClick={() => {
                setPlanPeriod("trimestral");
              }}
              ghost={planPeriod != "trimestral" ? true : false}
              css={middlePlanButtonCss}
            >
              Trimestral
            </Button>
            <Button
              onClick={() => {
                setPlanPeriod("anual");
              }}
              ghost={planPeriod != "anual" ? true : false}
              css={planButtonCss}
            >
              Anual
            </Button>
          </Button.Group>
          <Spacer />
        </Flex>
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
                  <Text css={{ color: "$accents8", minHeight: "100px" }}>
                    Conteúdos introdutórios e gratuitos para entender os
                    princípios básicos do libertarianismo e da Escola Austríaca.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: "contents" }} h2>
                R$ 0{" "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /mês
              </Text>

              <Button css={{ mt: '$7', mb: '$12', color: 'black'}} href="/cadastroMises" as="a">Acesse</Button>
              <Divider />
              <Box as={"ul"}>
                <PlanosContentBenefits text="Cursos introdutórios" active={true} />
                <PlanosContentBenefits text="Trilhas para direcionar o aprendizado" active={true} />
                <PlanosContentBenefits text="Conteúdos referentes ao livro do mês" active={false} />
                <PlanosContentBenefits text="Acesso a todos os cursos" active={false} />
                <PlanosContentBenefits text="25% de desconto em qualquer livro da loja da UL" active={false} />
                <PlanosContentBenefits text="Um livro capa dura e exclusivo por mês" active={false} />
                <PlanosContentBenefits text="Conteúdos exclusivos sobre o livro lançado" active={false} />
                <PlanosContentBenefits text="Brindes" active={false} />
                <PlanosContentBenefits text="Marca Página no tema do Livro" active={false} />
                <PlanosContentBenefits text="Caixa personalizada do Plano Konkin" active={false} />
                <PlanosContentBenefits text="10% de cashback em LUT para os 100 primeiros membros" active={false} />
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Hoppe
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8", minHeight: "100px" }}>
                    Conteúdos avançados para entender tudo sobre libertarianismo
                    e Escola Austríaca.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: "contents" }} h2>
                R${" "}
                {planPeriod == "anual"
                  ? "39,90 "
                  : planPeriod == "trimestral"
                  ? "44,90 "
                  : "49,90 "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /mês
              </Text>
              <Button

                css={{ mt: '$7', mb: '$12', color: 'black'}}
                href={"/planos/hoppe/" + planPeriod}
                as="a"
              >
                 Acesse
              </Button>
              <Divider />
              <Box as={"ul"}>
                <PlanosContentBenefits text="Cursos introdutórios" active={true} />
                <PlanosContentBenefits text="Trilhas para direcionar o aprendizado" active={true} />
                <PlanosContentBenefits text="Conteúdos referentes ao livro do mês" active={true} />
                <PlanosContentBenefits text="Acesso a todos os cursos" active={true} />
                <PlanosContentBenefits text="25% de desconto em qualquer livro da loja da UL" active={false} />
                <PlanosContentBenefits text="Um livro capa dura e exclusivo por mês" active={false} />
                <PlanosContentBenefits text="Conteúdos exclusivos sobre o livro lançado" active={false} />
                <PlanosContentBenefits text="Brindes" active={false} />
                <PlanosContentBenefits text="Marca Página no tema do Livro" active={false} />
                <PlanosContentBenefits text="Caixa personalizada do Plano Konkin" active={false} />
                <PlanosContentBenefits text="10% de cashback em LUT para os 100 primeiros membros" active={false} />
              </Box>
            </Card.Body>
          </Card>
          <Card css={{ p: "$6", mw: "400px" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: "$xs" }}>
                    Konkin
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: "$accents8", minHeight: "100px" }}>
                    Todos os meses um novo <Text css={{ color: "black" }} b>livro capa dura exclusivo</Text>, assim como
                    inúmeros conteúdos complementares para te ajudar a
                    aproveitar ao máximo as obras.
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body>
              <Text css={{ display: "contents" }} h2>
                R${" "}
                {planPeriod == "anual"
                  ? "74,90 "
                  : planPeriod == "trimestral"
                  ? "79,90 "
                  : "89,90 "}
              </Text>
              <Text css={{ display: "contents", color: "$accents8" }}>
                /mês
              </Text>
              <Button
                css={{ mt: '$7', mb: '$12', color: 'black'}}
                href={"/planos/konkin/" + planPeriod}
                as='a'
                disabled={planPeriod == "anual" ? true : false}
              >
                {planPeriod == "anual" ? "Acesse (em breve)" : "Acesse"}
              </Button>
              <Divider />
              <Box as={"ul"}>
                <PlanosContentBenefits text="Cursos introdutórios" active={true} />
                <PlanosContentBenefits text="Trilhas para direcionar o aprendizado" active={true} />
                <PlanosContentBenefits text="Conteúdos referentes ao livro do mês" active={true} />
                <PlanosContentBenefits text="Acesso a todos os cursos" active={true} />
                <PlanosContentBenefits text="25% de desconto em qualquer livro da loja da UL" active={true} />
                <PlanosContentBenefits text="Um livro capa dura e exclusivo por mês" active={true} />
                <PlanosContentBenefits text="Conteúdos exclusivos sobre o livro lançado" active={true} />
                <PlanosContentBenefits text="Brindes" active={true} />
                <PlanosContentBenefits text="Marca Página no tema do Livro" active={true} />
                <PlanosContentBenefits text="Caixa personalizada do Plano Konkin" active={true} />
                <PlanosContentBenefits text="10% de cashback em LUT para os 100 primeiros membros" active={true} />
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
