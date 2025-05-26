import { Box, Button, Center, FormControl, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { LoginButton } from "../components/LoginButton";
import { Login } from "../services/Login";
import { useContext, useState } from "react";
import React from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

    const [email, setEmail] = useState<string>(''); 
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate();

    const validateUser = async (email: string) => {
      const loggedIn = await Login(email);

      if(!loggedIn) {
        return alert('Invalid email!')
      }

      setIsLoggedIn(true);
      changeLocalStorage({login: true})
      navigate('/account/1')
    } 

    return (  
        <Center w="100%" color="white">
          <Box padding={25} w='50%'>
            <Card>
              <FormControl isRequired id="form">
                <Stack spacing={3}>              
                  <Input id="input" placeholder="Email" _placeholder={{ color: "white", opacity: "0.5"}} value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <PasswordInput />
                </Stack> 
                <Center mt={4}>
                  <LoginButton onClick={() => validateUser(email)}/>
                </Center>
              </FormControl>
            </Card>  
          </Box>      
        </Center>    
    )
}

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

export default Home;