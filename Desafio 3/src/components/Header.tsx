import { Box, Button, Center, Flex, Heading, Highlight, Spacer} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false);
    navigate('/')
  }

  return(
    <Flex background="teal.500" padding="4" color="white">
      <Box >
        <Center bg="teal.600" h="100px" color="white" borderRadius={15} padding={10}>
              <Heading size="3xl" letterSpacing="tight">
                <Highlight query="Bank" styles={{ color: "teal.100" }}>
                  DioBank
                </Highlight>               
              </Heading>
        </Center>
      </Box> 
      <Spacer/>
      <Center>
        {
          isLoggedIn && (
            <Button bg="teal.600" h="100px" color="white" borderRadius={15} _hover={{ bg: 'teal.800' }} onClick={() => logout()}>
            Logout
            </Button>
          )
        }
      </Center>       
    </Flex>
  )
}
