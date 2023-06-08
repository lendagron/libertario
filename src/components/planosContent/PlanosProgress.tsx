import { Divider, Text, Spacer, Progress } from '@nextui-org/react';
import React from 'react';
import { NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, CheckCircle } from "phosphor-react";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { useContext, useState } from "react";

export default function PlanosProgress() {

  return (
    <>
       <Flex
          css={{py: '$16', gap: '1rem', px: '$6'}}
          justify={'center'}
          wrap={'wrap'}
          direction={'column'}
          align={'center'}
       >
          <Flex
             css={{gap: '2rem', width: '75%'}}
             wrap={'wrap'}
             justify={'center'}
          >
            <Progress color="primary" value={34} size="lg" shadow />
            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'nowrap'}
               justify={'between'}
            >
              <Flex
                 wrap={'nowrap'}
                 justify={'start'}
                 align={'center'}
              >
                <NumberCircleOne size={48} />
                <Text
                  css={{ml: "16px"}}
                  size={36}
                  hideIn="sm"
                >
                  Plano
                </Text>
              </Flex>
              <Flex
                 wrap={'nowrap'}
                 justify={'start'}
                 align={'center'}
              >
                <NumberCircleTwo size={48} />
                <Text
                  css={{ml: "16px"}}
                  size={36}
                  hideIn="sm"
                >
                  Login
                </Text>
              </Flex>
              <Flex
                 wrap={'nowrap'}
                 justify={'start'}
                 align={'center'}
              >
                <NumberCircleThree size={48} />
                <Text
                  css={{ml: "16px"}}
                  size={36}
                  hideIn="sm"
                >
                  Frete
                </Text>
              </Flex>
              <Flex
                 wrap={'nowrap'}
                 justify={'start'}
                 align={'center'}
              >
                <NumberCircleFour size={48} />
                <Text
                  css={{ml: "16px"}}
                  size={36}
                  hideIn="sm"
                >
                  Pagamento
                </Text>
              </Flex>
            </Flex>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
