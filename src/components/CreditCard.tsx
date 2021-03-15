import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { CARD_DATA } from "../types";

interface CreditCardProps {
  isFlipped: boolean;
  data: CARD_DATA;
  numbers: any;
  cardDate: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  data,
  numbers,
  cardDate,
  isFlipped,
}) => {
  const cardBG = useColorModeValue("#1A202C", "#F0F0EE");
  const cardSlider = useColorModeValue("#F0F0EE", "#171923");
  const cardTextColor = useColorModeValue("#FFFFFF", "#2D3748");
  const cardNumberColor = useColorModeValue("#FFFFFF", "#5D5D5D");
  const cardNameColor = useColorModeValue("#FFFFFF", "#4A5568");
  const [shorterName, setShorterName] = useState("");
  const [asciiCodes, setAsciiCodes] = useState("");
  const { cardHolderName, cardCVC } = data;

  useEffect(() => {
    setShorterName(cardHolderName);
    if (cardHolderName.length >= 38) {
      setShorterName(cardHolderName.slice(0, 38) + "...");
    }
  }, [cardHolderName]);

  useEffect(() => {
    Object.keys(numbers).forEach((number: any) => {
      let asciiNumber = String.fromCharCode(numbers[number]);

      setAsciiCodes(asciiCodes + asciiNumber);
    });
  }, [numbers]);

  let cardFirm;

  if (asciiCodes[1] === "2" || asciiCodes[1] === "5") {
    cardFirm = <Image src="/mastercard.png" alt="logo" boxSize="4em" />;
  } else if (asciiCodes[1] === "4") {
    cardFirm = <Image src="/visa.png" alt="logo" boxSize="4em" />;
  } else if (asciiCodes[1] === "3") {
    cardFirm = (
      <Flex boxSize="4em" align="center">
        <Image src="/aExpress.png" alt="logo" boxSize="3em" />
      </Flex>
    );
  } else {
    cardFirm = <Box boxSize="4em" />;
  }
  return (
    <>
      {isFlipped ? (
        <Flex className="backside">
          <Flex
            flexDirection="column"
            className="inner"
            w="315px"
            h="183px"
            bg={cardBG}
            borderRadius="xl"
            color={cardTextColor}
            fontSize="xl"
            mb="1em"
          >
            <Flex
              w="100%"
              h="2em"
              bgColor={cardSlider}
              mt="0.7em"
              flexShrink={0}
            />
            <Flex w="80%" h="2em" mt="1.5em" mx="2em" justifyContent="flex-end">
              <Text color={cardTextColor}>CVV: {cardCVC}</Text>
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <Image src="/mastercard.png" alt="logo" boxSize="4em" />
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex
          className="frontside"
          direction="column"
          w="315px"
          h="183px"
          bg={cardBG}
          borderRadius="xl"
          color={cardTextColor}
          fontSize="xl"
          pl="30px"
          pr="20px"
          mb="1em"
        >
          <Box>
            <HStack boxSizing="border-box" mr="1em">
              <Image src="/chip.png" alt="chip" boxSize="2.5em" />
              <Spacer />
              {cardFirm}
            </HStack>
          </Box>
          <Box
            w="100%"
            h="1em"
            boxSizing="border-box"
            mb="0.5em"
            textAlign="start"
          >
            <Text
              color={cardNumberColor}
              letterSpacing="wider"
              fontWeight="semibold"
            >
              {asciiCodes}
            </Text>
          </Box>
          <Flex direction="row">
            <Text
              color={cardNameColor}
              fontWeight="medium"
              fontSize="medium"
              minW="12em"
              maxW="12em"
              textAlign="start"
            >
              {shorterName.toUpperCase()}
            </Text>
            <Spacer />
            <Box display="block">
              <Text fontSize="sm">valid thru</Text>
              <Flex flexDirection="row" fontSize="md" letterSpacing="wide">
                <Text>{cardDate.slice(0, 5)}</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};
