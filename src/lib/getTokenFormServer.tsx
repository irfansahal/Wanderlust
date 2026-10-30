import { headers } from "next/headers";
import { auth } from "./auth";

const GetTokenFromServer = async () => {
     const JWTToken = await auth.api.getToken({
      headers : await headers()
    });
    
    return JWTToken
}

export default GetTokenFromServer