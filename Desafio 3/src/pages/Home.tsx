import { Box, Center, FormControl, Input, Stack, useToast } from "@chakra-ui/react"
import { Card } from "../components/Card"
import { LoginButton } from "../components/LoginButton";
import { Login } from "../services/Login";
import { useContext, useState } from "react";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";


const Home = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>(''); 
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate();
    const toast = useToast();

    const validateUser = async (email: string, password: string) => {
      const loggedIn = await Login(email, password);

      if(!loggedIn) {
        toast({
          title: "Login Error!",
          description: "Email or Password wrong!",
          status: "error",
          duration: 3000,
          isClosable: true
        })
        return;
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
                  <Input placeholder="Email" _placeholder={{ color: "white", opacity: "0.5"}} type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                  <Input placeholder="Password" _placeholder={{ color: "white", opacity: "0.5"}} type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </Stack> 
                <Center mt={4}>
                  <LoginButton onClick={() => validateUser(email, password)}/>
                </Center>
              </FormControl>
            </Card>  
          </Box>      
        </Center>    
    )
}


export default Home;