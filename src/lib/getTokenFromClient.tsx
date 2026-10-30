import { authClient } from "./auth.client"

const GetTokenFromClient = async () => {
    const { data : tokenData , error } = await authClient.token()
     
     const token = tokenData?.token
     
     return token
}

export default GetTokenFromClient