import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import ColorMode from "../components/ColorMode";

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
  return (
    <Box>
      <ColorMode buttonSize="lg" />
      <Text>Boilerplate</Text>
    </Box>
  );
};
export default Index;
