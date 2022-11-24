import AuthApi from '../AuthApi'

const endpoints = AuthApi.injectEndpoints({
    endpoints : (builder) => ({
        login : builder.mutation({
            query : (data) => ({
                url : "/login",
                method : "POST",
                body : data,
            }),
            invalidatesTags : ['update']
        }),
        register : builder.mutation({
            query : (data) => ({
                url : "/register",
                method : "POST",
                body : data,
            }),
            invalidatesTags : ['update']
        }),
        authorize : builder.query({
            query : () =>  '/profile',
            providesTags : ['update']
        }),
        getContact : builder.query({
            query : () => '/contacts',
            providesTags : ['update']
        }),
        addContact : builder.mutation({
            query : (data) => ({
                url : '/contacts',
                method : "POST",
                body : data
            }),
            invalidatesTags : ['update']
        }),
        deleteContact : builder.mutation({
            query : (id) => ({
                url : `contacts/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : ['update']
        }),
        getOneConact : builder.query({
            query : (id) => `/contacts/${id}`,
            providesTags : ['update']
        }),
        editContact : builder.mutation({
            query : ({data,id}) => ({
                url : `/contacts/${id}`,
                method : "PATCH",
                body : data
            }),
            invalidatesTags : ['update']

        }) 
    })
})

export const {useLoginMutation,useAuthorizeQuery,useRegisterMutation,useGetContactQuery,useAddContactMutation,useDeleteContactMutation,useGetOneConactQuery,useEditContactMutation} = endpoints