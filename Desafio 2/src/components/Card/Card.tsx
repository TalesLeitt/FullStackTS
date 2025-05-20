import { FormControl, FormLabel, Input, InputGroup, InputRightElement, Box, Center, Button, AbsoluteCenter, Stack } from "@chakra-ui/react"
import React from "react";
import { LoginButton } from "../LoginButton/LoginButton";

export const Card = () => {
  return (
    <>    
      <Box bg="teal.500" w="100%" h="100vh" padding="4">
        <AbsoluteCenter w="70%" color="white">
          <FormControl isRequired>
            <Stack spacing={3}>
              <Input placeholder="Email" _placeholder={{ color: "white", opacity: "0.5"}}/>
              <PasswordInput />
            </Stack> 
            <Center mt={4}>
              <LoginButton />
            </Center>
          </FormControl>
        </AbsoluteCenter>
      </Box>
    </>
  );
};

const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        _placeholder={{ color: "white", opacity: "0.5"}}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick} colorScheme="teal">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
