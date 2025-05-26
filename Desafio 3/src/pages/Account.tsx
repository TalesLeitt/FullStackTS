import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface UserData {
  email: string
  password: string
  user: string
  balance: number
  id: string
}

const Account = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')

    useEffect(() => {
        const getData = async () => {
        const data: any | UserData = await api;
        setUserData(data);
        }
        getData();
    }, [])

    const ActualData = new Date();  

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16} >
                {
                    userData === undefined || userData === null ?
                    (
                        <Spinner size={"xl"} color="white"/>    
                    ):
                    (
                        <>
                        <CardInfo title={`Hello ${userData?.user}`} content={`${ActualData.getDay()}/${ActualData.getMonth()}/${ActualData.getFullYear()} ${ActualData.getHours()}:${ActualData.getMinutes()}`}/>
                        <CardInfo title="Balance" content={`$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Account;