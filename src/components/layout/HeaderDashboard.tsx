import { Avatar, Badge, Button } from 'antd'
import React from 'react'
import { GoBell } from 'react-icons/go'

const profile = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HeaderDashboard = () => {
  return (
    <div style={{height: "80px"}} className="flex items-center !mx-5 justify-end !px-4 py-[20px] bg-white shadow-md rounded-b-[24px]">      
        <div className="flex items-center justify-between gap-10">
          <Badge count={0} showZero color="#faad14">          
           <Avatar icon={<GoBell />} shape="circle" size="large" className='cursor-pointer focus:outline' />
          </Badge>
          <div className="flex items-center justify-center gap-3">
             <Avatar size={50} src={profile} alt='Profile' />
             <h3 style={{fontWeight: 700, fontSize: 14, color: "#121212"}}>Admin Humphrey</h3>
          </div>
        </div>      
    </div>
  )
}

export default HeaderDashboard
