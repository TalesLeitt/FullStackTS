import { Box } from "@chakra-ui/react"

export const Card = ({ children }: any) => {   

  return (
    <>    
      <Box bg="teal.500" w="100%" h="250px" padding="4" borderRadius={15}>
        { children }
      </Box>
    </>
  );
};


