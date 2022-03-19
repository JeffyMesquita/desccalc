import { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text, 
  theme,
  Center,
  Input,
  Button,
} from "@chakra-ui/react";

export const App = () => {
  const [value, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const [descValue, setDescValue] = useState(0);

  const handleCalcDesc = () => {
    let desc = 0;
    let finalValue = 0;

    if (value <= 100) {
      desc = value * 0.1;
      finalValue = value - desc;
    }

    if (value > 100 && value <= 150) {
      desc = value * 0.2;
      finalValue = value - desc;
    }

    if (value > 150) {
      desc = value * 0.3;
      finalValue = value - desc;
    }

    setDescValue(desc);
    setTotal(finalValue);
  };

  useEffect(() => {}, [value]);

  return (
    <ChakraProvider theme={theme}>
      <Center height={"100vh"}>
        <Box
          as="main"
          textAlign="center"
          fontSize="xl"
          w={"600px"}
          h={"600px"}
          border={"1px"}
          borderColor={"red"}
          borderRadius={"20px"}
        >
          <Text>Escreva o valor</Text>
          <Input
            type="number"
            placeholder="Digite o valor"
            w={"50%"}
            onChange={(e) => setValue(+e.target.value)}
          />

          <Button
            onClick={() => {
              handleCalcDesc();
            }}
          >
            Calcular desconto
          </Button>

          <Text>Valor descontado</Text>
          <Text>{descValue}</Text>

          <Text>Valor final</Text>
          <Text>{total}</Text>
        </Box>
      </Center>
    </ChakraProvider>
  );
};
