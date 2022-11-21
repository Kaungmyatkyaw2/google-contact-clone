import AuthApi from '../AuthApi'

const endpoints = AuthApi.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) => ({
                url : "/login",
                method : "POST",
                body : data,
            })
        }),
        register : builder.mutation({
            query : (data) => ({
                url : "/register",
                method : "POST",
                body : data,
            })
        }),
        authorize : builder.query({
            query : () => '/profile'
        }),
        getContact : builder.query({
            query : () => '/contacts'
        })
    })
})

export const {useLoginMutation,useAuthorizeQuery,useRegisterMutation,useGetContactQuery} = endpoints