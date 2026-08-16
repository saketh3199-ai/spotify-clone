import { apiSlice } from "./apiSlice";

export const LoginApiSlice = apiSlice.injectEndpoints
(
    {
        endpoints:(builder)=>
        {
            return (
            {
                login:builder.mutation
                (
                    {
                        query:(loginCredentials)=>
                        {
                            return {url: 'https://apis.ccbp.in/login',method: 'POST',body: JSON.stringify(loginCredentials),headers: {'Content-Type': 'text/plain',}}
                        }
                    }
                
                )
            })
        }
    }
)

export const {useLoginMutation} = LoginApiSlice