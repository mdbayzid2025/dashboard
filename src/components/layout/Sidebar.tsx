import { Button, ConfigProvider, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sidebarItems from '../../Utils/sidebarItems'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import type { TSidebarItem } from '../../Utils/generateSidebarItems'

const {Sider} = Layout

const bottomMenuItem = {
    key: "logout",
    icon: <RiLogoutBoxRLine size={24}/>,
    label: "Log Out",
  };

  const sidebarItemsGenerator = (items: TSidebarItem[]) => {
    return items.map(item => { 
     if(item.children) {
        return {
          key: item.key,
          label: item.label, 
          icon: item.icon,
          children: item.children.map(child => ({           
              key: child.key,
              label: <Link to={child.path}>{child.label}</Link>,
              icon: child.icon,            
          }))
        };
      }
      return {
        key: item.key,
        label: <Link to={item.path}>{item.label}</Link>,
        icon: item.icon,
      }
    });
  }

const Sidebar = () => {
  const location = useLocation()
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  }

  console.log("Sidebar location: ", location.pathname);

  const handleLogOut = () => {
    alert("Logged out successfully");
    // Here you can add your logout logic, like clearing tokens or redirecting to login page    
  }
  return (
    <ConfigProvider
    theme={{
      token: {        
        colorText: '#797761',
      },
      components: {
        Menu: {
         itemActiveBg: "#286a25'",         
         itemSelectedColor: "#FFFFFF",
          itemSelectedBg: "#6DBD44", 
          itemBorderRadius: "0 25px 25px 0" as any,       
          itemHeight: 45, 
          itemMarginBlock: 12,          
        },
      },
    }}
    >
      <Sider
        width={260}
        theme='light'        
        breakpoint='lg'
        collapsedWidth="0"
      >
        <Link to="/"
        style={{
          margin: '0 20px',
          padding: '20px 0',
        }}
        className='flex items-center justify-center'>
          <div className="">
          <img src="/Logo.png" className='w-[168px] object-cover !mx-auto' alt="" />
        </div>
        </Link>
        <div 
        style={{
         height: "calc(100vh - 85px)",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
        }}
        >
        <Menu 
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={sidebarItemsGenerator(sidebarItems)}
        />

          <Button
            type="primary"
            style={{
              //   backgroundColor: "none",
              border: "none",              
              marginTop: "auto",
              height: "45px",
              backgroundColor: "transparent",
              color: "#286a25",
              fontWeight: "400",
              fontSize: "16px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingBlock: "20px"
            }}
            onClick={handleLogOut}
          >
            <RiLogoutBoxRLine size={24}/>
            Logout
          </Button>
          </div>
      </Sider>
      
    </ConfigProvider>
  )
}

export default Sidebar
