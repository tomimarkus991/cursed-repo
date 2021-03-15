import { Button } from "@chakra-ui/button";
import { ToastPosition, useToast } from "@chakra-ui/toast";
import React from "react";

interface ToasterProps {}

export const Toaster: React.FC<ToasterProps> = ({}) => {
  const toast = useToast();
  const variants = ["solid", "subtle", "left-accent", "top-accent"];
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];
  return (
    <Button
      type="submit"
      onClick={() => {
        for (let i = 0; i <= 20; i++) {
          let rndVariant = Math.floor(Math.random() * 4) + 1;
          let rndPosition = Math.floor(Math.random() * 6) + 1;

          toast({
            title: "You paid",
            description: "We've have automatically taken your money ty",
            status: "success",
            duration: 9000,
            isClosable: false,
            variant: variants[rndVariant],
            position: positions[rndPosition] as ToastPosition,
          });
        }
      }}
    >
      Please pay
    </Button>
  );
};
