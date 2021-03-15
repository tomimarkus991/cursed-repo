import { useColorModeValue } from "@chakra-ui/color-mode";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import anime from "animejs";
import React, { useState } from "react";
import { CardNumberGrid } from "./CardNumberGrid";
import { CreditCard } from "./CreditCard";
import { Toaster } from "./Toaster";

interface CreditCardProps {}
export const DEFAULT_CARD_STATE = {
  cardHolderName: "YOUR NAME",
  cardDate: "xx/xx",
  cardCVC: "xxx",
  isFlipped: false,
};

export const CreditCardForm: React.FC<CreditCardProps> = ({}) => {
  const [isFlipped, setIsFlipped] = useState(DEFAULT_CARD_STATE.isFlipped);
  const [cardObject, setCardObject] = useState(DEFAULT_CARD_STATE);
  const [numbers, setNumbers] = useState({});

  const [cardDate, setCardDate] = useState(DEFAULT_CARD_STATE.cardDate);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCardObject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const changeCardNumber = (e: any) => {
  //   setCardNumber(
  //     e.target.value
  //       .replace(/[^\dA-Z]/g, "")
  //       .replace(/(.{4})/g, "$1 ")
  //       .trim()
  //   );
  // };
  const changeCardDate = (e: any) => {
    setCardDate(
      e.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{2})/g, "$1/")
        .trim()
    );
  };
  const flipCard = () => {
    anime({
      targets: ".frontside",
      rotateY: "180deg",
      duration: 200,
      easing: "linear",
    });
  };
  const unFlipCard = () => {
    anime({
      targets: ".backside",
      rotateY: "360deg",
      duration: 200,
      easing: "linear",
    });
  };
  const cardTextColor = useColorModeValue("#2D3748", "#FFFFFF");
  return (
    <Box align="center" className="cardForm">
      <CreditCard
        data={cardObject}
        isFlipped={isFlipped}
        cardDate={cardDate}
        numbers={numbers}
      />

      <Flex flexDirection="column" color={cardTextColor}>
        <CardNumberGrid setNumbers={setNumbers} />

        <Input
          name="cardHolderName"
          placeholder="Name"
          onChange={(e) => handleInputChange(e)}
          mt="0.5em"
          mb="0.5em"
          required
        />
        <Flex flexDirection="row" mb="1em">
          <Input
            name="cardDate"
            placeholder="Valid Thru"
            onChange={(e) => changeCardDate(e)}
            maxLength={4}
            required
          />
          <Box marginX="0.8em"></Box>
          <Input
            name="cardCVC"
            placeholder="CVC"
            maxLength={3}
            onFocus={() => {
              setIsFlipped(true);
              flipCard();
            }}
            onBlur={() => {
              setIsFlipped(false);
              unFlipCard();
            }}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </Flex>
        <Toaster />
      </Flex>
    </Box>
  );
};
