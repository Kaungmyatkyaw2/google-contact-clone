


import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const AuthApi = createApi({
    reducerPath : "Api",
    tagTypes:["update"],
    baseQuery:fetchBaseQuery(
        {
            baseUrl : 'http://go.contact.mmeducare.com/api/v1',
            prepareHeaders : (header) => (
                localStorage.getItem("token") ? header.set('authorization',`Bearer ${localStorage.getItem("token")}`) : header.delete("Authorization")
            )
        }
    ),
    endpoints : (builder) => ({})
})

export default AuthApi