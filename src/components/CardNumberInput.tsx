import { Input } from "@chakra-ui/input";
import React from "react";

interface CardNumberInputProps {
  name: string;
  placeholder: string;
  setNumbers: React.Dispatch<React.SetStateAction<{}>>;
  index: number;
}

export const CardNumberInput: React.FC<CardNumberInputProps> = ({
  name,
  placeholder,
  setNumbers,
  index,
}) => {
  const handleNumbersChange = (e: any) => {
    const { name, value } = e.target;
    setNumbers((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  };
  return (
    <Input
      name={name}
      placeholder={placeholder}
      maxLength={2}
      onChange={(e) => handleNumbersChange(e)}
      key={index}
      required
    />
  );
};
