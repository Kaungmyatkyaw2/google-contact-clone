import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth : false,
    user : null,
    token : null
}

const AuthSlicer = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginReducer : (state,action) => {
            localStorage.setItem("token",action.payload.token)
            state.isAuth = true
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logoutReducer : (state) => {
            localStorage.removeItem("token")
            state.isAuth = false
            state.user = null
            state.token = null
        }
    }
})

export const {loginReducer,logoutReducer} =  AuthSlicer.actions
export default AuthSlicer.reducer