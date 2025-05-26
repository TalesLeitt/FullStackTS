import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    title: string;
    content: string
}

const CardInfo = ({ title, content }: ICardInfo) => {
    return (
        <Box 
        backgroundColor='teal.500'
        minHeight='120px'
        padding={8}
        borderRadius='25px'>
            <Text fontSize='3xl' fontWeight={"bold"} color={"white"}>{ title }</Text>
            <Text fontSize='xl' color={"white"}>{ content }</Text>
        </Box>     
    )
}

export default CardInfo