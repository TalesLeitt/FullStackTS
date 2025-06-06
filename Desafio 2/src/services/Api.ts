type Account = {
    email: string,
    password: string,
    user: string,
    balance: number,
    id: string
}

const account: Account = {
    email: 'tales@email',
    password: 'talessenha',
    user: 'TalesLeitt',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account);
    }, 3000);
});

