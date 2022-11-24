import { AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDeleteContactMutation } from '../../store/service/Endpoints/AuthEndpoint'
import { useEffect } from 'react'


const ContactRow = ({data}) => {

  const nav = useNavigate()
  const auth = useSelector(state => state.authed.isAuth)
  const [drop,res] = useDeleteContactMutation()


  useEffect(() => {console.log(res)},[res])

  const handleDetail = (user) => {
    console.log(user)
    if (localStorage.getItem("token") && auth) {
      localStorage.setItem('eachContact',JSON.stringify(user));
      nav('/contacts/detail')
    }
  }

  return (
    
        data?.map((i,index) => (
           <div key={index} className='row-container group !border-none !text-gray-800 !font-robot hover:bg-gray-100 bg-opacity-[0.5] !items-center cursor-pointer'>
  
              <div className='lg:w-[20%] flex items-center sm:w-[35%] w-[70%]'>
                  <div className={`hidden group-hover:flex justify-center items-center w-[36px] h-[36px] `}>
                      <input  id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500" />
                  </div>
                  {
                    i.contactPhoto !== 'http://go.contact.mmeducare.com/storage' ?
                    <img className='w-[36px] h-[36px] block group-hover:hidden rounded-full object-cover' src={i.contactPhoto} alt="" />
                    :
                    <div className={`w-[36px] h-[36px] bg-[#808080] rounded-full flex group-hover:hidden toCenter`}>{i.firstName[0]}</div>
                  }
                  <h1 className='text-[14px] ml-[20px]'>{i.fullName}</h1>
              </div>
              <div className='lg:w-[20%] w-[35%] sm:block hidden'>
                <h1>{i.email}</h1>
              </div>
              <div className='normal-row'>
                <h1>+{i.phone}</h1>
              </div>
              <div className='normal-row'>
                <h1>{i.job}</h1>
              </div>
              <div className='lg:w-[20%] md:w-[10%] w-[30%]'>
                <div className='hidden justify-end space-x-[20px] text-[20px] text-gray-600 cursor-pointer group-hover:flex'>
                <MdOutlineModeEditOutline />
                <div onClick={() => handleDetail(i)}>
                <AiOutlineInfoCircle/>
                </div>
                <div onClick={() => drop(i.id)}>
                  <AiOutlineDelete/>
                </div>
                </div>
              </div>
  
            </div>
        ))
       
    )
}

export default ContactRow