import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ColorMode from "../components/ColorMode";
import { CreditCardForm } from "../components/CreditCardForm";
import { CustomAlert } from "../components/CustomAlert";
import { timeToString } from "../functions/timetoString";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  const [stopper, setStopper] = useState("");
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const onCookieClose = () => setIsCookieOpen(false);
  const onAlertClose = () => setIsAlertOpen(false);

  let startTime: number;
  let elapsedTime = 0;

  useEffect(() => {
    startTime = Date.now() - elapsedTime;
    setTimeout(() => {
      setIsCookieOpen(true);
    }, 1000);
    setInterval(() => {
      setIsAlertOpen(true);
    }, 30000);
    setInterval(() => {
      elapsedTime = Date.now() - startTime;
      setStopper(timeToString(elapsedTime).formatedTime);
    }, 10);
  }, []);
  return (
    <Flex justifyContent="center">
      <CustomAlert
        isOpen={isCookieOpen}
        onClose={onCookieClose}
        title="COOOKIEE"
        body="This site uses cookies, is that a problem for you?"
      />
      <CustomAlert
        isOpen={isAlertOpen}
        onClose={onAlertClose}
        title="FASTER"
        body="Hurry up, time is ticking!"
      />

      <Flex flexDirection="column" align="center" w="20em">
        <Heading mt="2em" mb="1em">
          Bad UX
        </Heading>
        <Text mb="0.5em">Enter Code in ASCII</Text>
        <Text mb="0.5em">Please don't mess up</Text>
        <Box>
          <Text fontSize="xl" mb="0.5em">
            {stopper}
          </Text>
        </Box>

        <Box mb="1em">
          <ColorMode buttonSize="lg" />
        </Box>

        <CreditCardForm />
      </Flex>
    </Flex>
  );
};
export default Index;
