import { Box, Center, Heading, Highlight} from "@chakra-ui/react";

export const Header = () => {
  return(
    <>
      <Box background="teal.500" width="100%" padding="4" color="white">
        <Center bg="teal.600" h="100px" color="white" borderRadius={15}>
              <Heading size="3xl" letterSpacing="tight">
                <Highlight query="Bank" styles={{ color: "teal.100" }}>
                  DioBank
                </Highlight>               
              </Heading>
        </Center>
      </Box>
    </>    
  )
}
