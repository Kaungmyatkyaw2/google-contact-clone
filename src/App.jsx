import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Loader from './model/Loader'
import Contacts from './pages/Contacts'
import CreateContact from './pages/CreateContact'
import Detail from './pages/Detail'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'
import ShowContact from './pages/ShowContact'
import { useAuthorizeQuery } from './store/service/Endpoints/AuthEndpoint'
import { loginReducer, logoutReducer } from './store/Slicer/auth/AuthSlicer'

const App = () => {

  const nav = useNavigate()
  const isAuth = useAuthorizeQuery();
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.getItem("token") && !isAuth.isError) {
        if (isAuth.isSuccess) {
          nav('/contacts')
          dispatch(loginReducer({token:localStorage.getItem("token"),user:isAuth.data.profile[0]}))
        }      
    }else{
      nav('/')
      // dispatch(logoutReducer())
    }
  },[isAuth])


  if (isAuth.isLoading) {
    return <Loader/>
  }
  

  return (
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/contacts' element={<Contacts/>}>
          <Route index element={<ShowContact/>} /> 
          <Route path='create' element={<CreateContact/>} /> 
          <Route path='detail/:id' element={<Detail/>} /> 
          <Route path='edit/:id' element={<Edit/>} /> 
        </Route>
      </Routes>
  )
}

export default App