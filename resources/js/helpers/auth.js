export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/login', credentials)
            .then((response) => {
                res(response.data);
            })
            .catch((err) => {
                rej("Wrong email or password");
            })
    })
}

// when the user successfully login,
// we get the user,
// stringify it,
// and put it in the localStorage,
// so we don't have to login again,
// the user can be gotten from the localStorage

export function getLocalUser() {

    const userStr = localStorage.getItem('user');

    if(!userStr){
        return null;
    }

    return JSON.parse(userStr)
}
