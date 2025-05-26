import { api } from "./Api"

export const Login = async (email: string, password: string) : Promise <boolean> => {

    const data: any = await api;
    
    if(email !== data.email || password !== data.password){
        return false
    }
    return true
}
