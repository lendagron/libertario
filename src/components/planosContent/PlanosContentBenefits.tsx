import {
  Text,
} from "@nextui-org/react";
import React from "react";
import { Check, X } from "phosphor-react";
import { Flex } from "../styles/flex";

interface Props {
  text: string,
  active: boolean,
}

export default function PlanosContentBenefits({text, active}: Props) {
  const activeCss = { py: "$2", gap: "$2" };
  const inactiveCss = { py: "$2", gap: "$2", textDecoration: "line-through" };

  return (
    <>
      <Flex
        as={"li"}
        css={active ? activeCss : inactiveCss}
        align={"center"}
      >
        <Check css={{ color: "$gray900" }} size={16} />
        <Text span css={ active ? { color: "$gray900", px: "$5" } : { color: "$accents8", px: "$5" }}>
          {text}
        </Text>
      </Flex>
    </>
  );
}
