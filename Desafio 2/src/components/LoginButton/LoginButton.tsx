import { Box } from "@chakra-ui/react"
import { login } from "../../services/login"

export const LoginButton = () => {
    return (
        <Box
        onClick={login}
        as='button'
        height='100%'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px'
        px='8px'
        borderRadius='1rem'
        fontSize='4rem'
        fontWeight='semibold'
        bg='teal.600'
        borderColor='white'
        color='#ffffff'
        _hover={{ bg: 'teal.800' }}
        _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
        }}
        _focus={{
            boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
        padding='10px'
        margin='10px'
        >
            Login    
        </Box>
    )
}