import { extendTheme } from "@chakra-ui/react";

// Let's say you want to add custom colors
export const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      100: "#c90eb7",
      900: "#0c26ed",
    },
  },
  components: {
    Input: {
      baseStyle: {
        borderColor: "red.800",
      },
    },
  },
});
