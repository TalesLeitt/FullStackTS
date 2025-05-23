import { FormControl, Input, InputGroup, InputRightElement, Box, Center, Button, AbsoluteCenter, Stack } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";
import { LoginButton } from "../LoginButton/LoginButton";
import { login } from "../../services/login";
import { api } from "../../services/api";

interface UserData {
  email: string
  password: string
  user: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('');
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    }
    getData();
  }, [])

  console.log(userData)

  return (
    <>    
      <Box bg="teal.500" w="100%" h="100vh" padding="4">
        <AbsoluteCenter w="70%" color="white">
          <FormControl isRequired>
            <Stack spacing={3}>
              { userData === null || userData === undefined  ? <h1>Loading...</h1> : <h1>Loaded</h1> }
              <Input placeholder="Email" _placeholder={{ color: "white", opacity: "0.5"}} value={email} onChange={(event) => setEmail(event.target.value)}/>
              <PasswordInput />
            </Stack> 
            <Center mt={4}>
              <LoginButton onClick={() => login(email)}/>
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
