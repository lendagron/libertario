import React from 'react';
import {
  Container,
  Collapse,
  Card,
  Row,
  Text,
  Col,
  Spacer,
  Button,
  Link,
} from '@nextui-org/react';

export default function Sidebar() {
  return (
    <Container css={{ p: '0px', w: '100%', m: '0px' }}>
      <Collapse.Group css={{ width: '200px' }}>
        <Collapse title="Trilhas" subtitle="Lista de Trilhas">
          <Text css={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Libertarianismo
            </Link>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Economia
            </Link>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Direito
            </Link>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Filosofia
            </Link>
          </Text>
        </Collapse>
        <Collapse title="Perfil" subtitle="Sobre o seu perfil">
          <Text css={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Perfil
            </Link>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Senha
            </Link>
          </Text>
        </Collapse>
        <Collapse title="Plano Honkin" subtitle="Sobre ">
          <Text css={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Livros
            </Link>
          </Text>
        </Collapse>
        <Collapse title="Projetos" subtitle="Alguns Projetos">
          <Text>
            <Link
              href="#"
              block
              css={{
                color: 'black',
                fontWeight: '$bold',
                '&:hover': {
                  background: '#F5DE00',
                  color: 'black',
                },
              }}
            >
              Projeto
            </Link>
          </Text>
        </Collapse>
      </Collapse.Group>
      <Text>
        <Link
          href="#"
          block
          css={{
            color: 'black',
            fontWeight: '$bold',
            '&:hover': {
              background: '#F5DE00',
              color: 'black',
            },
          }}
        >
          Apoie aqui
        </Link>
      </Text>
    </Container>
  );
}
