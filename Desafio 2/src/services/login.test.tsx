import { Login } from "./Login"

describe('login', () => {

    const mockEmail = "tales@email";

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await Login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um alert com erro', async () => {
        const response = await Login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})