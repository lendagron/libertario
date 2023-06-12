import { Divider, Text, Spacer, Progress } from '@nextui-org/react';
import React from 'react';
import { NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, CheckCircle } from "phosphor-react";
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import PlanosProgressElement from './PlanosProgressElement';
import { useContext, useState } from "react";

interface Props {
  step: number,
}

export default function PlanosProgress({step}: Props) {

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
            <Progress color="primary" value={ 1 + 33 * (step - 1) } size="lg" shadow />
            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'nowrap'}
               justify={'between'}
            >
              <PlanosProgressElement text="Plano" elementStep={1} currentStep={step} />
              <PlanosProgressElement text="Login" elementStep={2} currentStep={step} />
              <PlanosProgressElement text="Frete" elementStep={3} currentStep={step} />
              <PlanosProgressElement text="Pagamento" elementStep={4} currentStep={step} />
            </Flex>
          </Flex>
       </Flex>
       <Divider
          css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
       />
    </>
  );
}
