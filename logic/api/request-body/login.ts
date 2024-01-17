interface UserCredential {
    data: {
        username: string,
        password: string
    }
}

const setUserCredential = (username: string, password: string): UserCredential => {
    return {
        data: {
            username: username,
            password: password
        }
    }
}


export { UserCredential, setUserCredential }