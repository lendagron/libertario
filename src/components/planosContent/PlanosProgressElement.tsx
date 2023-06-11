import { Text} from '@nextui-org/react';
import React from 'react';
import { NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, CheckCircle } from "phosphor-react";
import { Flex } from '../styles/flex';

interface Props {
  text: string,
  elementStep: number,
  currentStep: number,
}

function getElementNumber(elementStep, numberSize, color) {
    switch (elementStep) {
      case 1:
        return <NumberCircleOne size={numberSize} color={color}  />;
        break;
      case 2:
        return <NumberCircleTwo size={numberSize} color={color}  />;
        break;
      case 3:
        return <NumberCircleThree size={numberSize} color={color}  />;
        break;
      case 4:
        return <NumberCircleFour size={numberSize} color={color}  />;
        break;
      default:
        return <CheckCircle size={numberSize} color={color}  />;
        break;
    }
}

export default function PlanosProgressElement({text, elementStep, currentStep}: Props) {
  const numberSize = 48;
  const textSize = 36;
  const color = currentStep < elementStep ? "gray" : "black";

  return (
    <>
      <Flex
         wrap={'nowrap'}
         justify={'start'}
         align={'center'}
      >
        {elementStep < currentStep ? <CheckCircle size={numberSize} color={color}  /> : getElementNumber(elementStep,numberSize,color)}
        <Text
          css={{ml: "16px"}}
          size={textSize}
          hideIn="sm"
          color={color}
        >
          {text}
        </Text>
      </Flex>
    </>
  );
}
