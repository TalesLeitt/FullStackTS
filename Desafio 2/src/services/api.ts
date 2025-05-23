const account = {
    email: 'tales@email',
    password: 'talessenha',
    user: 'talesleitt'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(account);
    }, 3000);
});

