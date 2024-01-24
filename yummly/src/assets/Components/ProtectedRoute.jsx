import React, { useEffect, useState } from 'react'
import { FetchCurrentUser } from '../apicall/users'
import { Avatar, message } from "antd"
import { useNavigate } from "react-router-dom";
import {BiUserCircle} from 'react-icons/bi'
import {TbLogout} from 'react-icons/tb'
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/Slice/User';




const ProtectedRoute = ({children}) => {
    
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.users)
    
    
    const redirectUser = useNavigate();

    const validateToken = async()=>{
        try {
            const response = await FetchCurrentUser();
            if(response.success){
                dispatch(setUser(response.data))
            }else{
                redirectUser("/login")
                message.error(response.message)
            }
        } catch (error) {
            redirectUser("/login")
            message.error(error.message)
        }
    }

    useEffect(()=>{
      const token=localStorage.getItem("token")
        if(token){
            validateToken();
        }else{
            redirectUser("/login")
        }
        
    },[])


  return (

        <div>  
            {/* Header */}
            <div className="flex justify-between items-center  bg-blue-300 p-5 pt-24 lg:w-3/4 lxl:w-4/5 lg:ml-auto lg:-mt-10 lxl:ml-auto">    
            <Avatar shape="square" size={96} icon={<UserOutlined />} />
                <div className="bg-white py-3 px-6 rounded flex gap-1 items-center"> 
                     <BiUserCircle/>
                    <span className="underline cursor-pointer uppercase"
                     onClick={()=> {                 
                        redirectUser("/profile");
                       }} >
                        {user && user.firstname}</span>
                    <TbLogout className="ml-5 cursor-pointer"
                    onClick={()=> {
                        localStorage.removeItem("token")
                        redirectUser("/login");
                    }}/>
                </div>
            </div>  
            {/* Body */}
            <div className="m-1 -mt-8 lg:mt-2"> {children} </div>
        </div>  
    
  )
}
export default ProtectedRoute
