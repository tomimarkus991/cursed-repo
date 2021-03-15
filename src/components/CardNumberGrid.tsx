import { Grid } from "@chakra-ui/react";
import React from "react";
import { CardNumberInput } from "./CardNumberInput";

interface CardNumberGridProps {
  setNumbers: React.Dispatch<React.SetStateAction<{}>>;
}
{
  /* <CardNumberInput
        name="cardNumber1"
        placeholder="1"
        setNumbers={setNumbers}
      /> */
}
export const CardNumberGrid: React.FC<CardNumberGridProps> = ({
  setNumbers,
}) => {
  let body: any = [];
  for (let i = 1; i <= 16; i++) {
    let numberName = `cardNumber${i}`;
    body.push(
      <CardNumberInput
        name={numberName}
        placeholder={i.toString()}
        setNumbers={setNumbers}
        index={i}
      />
    );
  }

  return (
    <Grid
      templateColumns={{
        base: "repeat(4, 1fr)",
      }}
      gap={4}
      flex={1}
    >
      {body}
    </Grid>
  );
};
