import { Box } from "@chakra-ui/react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <Box minHeight='100vh' backgroundColor='teal.600'>
      <Header />
      { children }
      <Footer />
    </Box>
  )
}
