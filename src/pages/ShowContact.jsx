import { useEffect, useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import ContactRow from '../components/ShowContact/ContactRow'
import Loader from '../model/Loader'
import { useGetContactQuery } from '../store/service/Endpoints/AuthEndpoint'

const ShowContact = () => {

  const data = useSelector(state => state.authed)
  const contact = useGetContactQuery()


  const navItems = [
    'Phone number','Job title & company'
  ]

  const show = useSelector(state => state.userAction.sidebar)
  

  return (
    <div className={`duration-200 h-[100vh] overflow-scroll xl:fixed ${!show ? 'xl:ml-[20%] xl:w-[80%]' : 'w-[100%] ml-0'} w-full ml-0 px-[20px]`}>

      <div className='row-container'>

        <div className='lg:w-[20%] sm:w-[35%] w-[70%]'>
          <h1>Name</h1>
        </div>

        <div className='lg:w-[20%] w-[35%] sm:block hidden'>
          <h1>Email</h1>
        </div>

        {
          navItems.map((i,index) => (
            <div key={index} className={`normal-row`}>
               <h1>{i}</h1>
            </div>
          ))
        }   

          <div className='lg:w-[20%] md:w-[10%] w-[30%]'>
               <h1><BsThreeDotsVertical className='text-[20px] ml-auto'/></h1>
            </div>     
      </div>

      <p className='text-[11px] font-robot font-bold text-gray-500 tracking-widest p-[10px]'>CONTACTS (19)</p>

        {
          data.isAuth && contact.isSuccess ? 
          <ContactRow data={contact.data.contacts.data} />
          :
          <Loader/>
        }

    </div>
  )
}

export default ShowContact