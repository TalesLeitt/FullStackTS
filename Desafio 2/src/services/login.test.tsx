import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = "tales@email";

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo! ${mockEmail}`);
    })

    it('Não deve exibir alerta', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!');
    })

    it('Deve exibir um alert com erro', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email inválido!');
    })
})