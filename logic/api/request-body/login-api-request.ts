interface UserCredential{
    username : string,
    password:string
}

const setUserCredential = (username:string,password:string)=>{
    return{
        username: username,
        password:password
    }
}

export const requestOptionsUserLogin = (username:string,password:string) => {
    return {
        data: setUserCredential(username, password),
    }
}

export{UserCredential}