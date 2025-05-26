import { Login } from "./Login"

describe('login', () => {

    const mockEmail = "tales@email";
    const mockPassword = "talessenha"

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await Login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um alert com erro', async () => {
        const response = await Login('email@invalido.com', 'senhaerrada')
        expect(response).toBeFalsy()
    })
})