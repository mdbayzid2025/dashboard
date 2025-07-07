import React from 'react'
import { BsBox } from 'react-icons/bs';

const DashboardStates = () => {
        const data = [
        {
            name: 'Total Sales',
            date: "13 NOV, 2024",
            total: '20555',
            dailyTotal: "29",  
            icon: <BsBox size={20} />                     
        },
        {
            name: 'Total Quotes Fertiliser',
            date: "13 NOV, 2024",
            total: '20555',
            dailyTotal: "29",        
            icon: <BsBox size={20} />                 
        },
        {
            name: 'Total Earning',
            date: "13 NOV, 2024",
            total: '20555',
            dailyTotal: "29",   
            icon: <BsBox size={20} />                      
        },
        {
            name: 'Total Profit',
            date: "13 NOV, 2024",
            total: '20555',
            dailyTotal: "29",               
            icon: <BsBox size={20} />          
        },               
    ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => 
            <div className="shadow-lg rounded-[14px] !px-4 !py-4 bg-white" key={index}>
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-[#D2EBC5] rounded-full flex items-center justify-center">
                            {item.icon}
                        </div>
                        <p className="font-medium text-2xl text-black">{item.name}</p>
                    </div>
                    <p className="text-[#999999] text-lg !mt-3">{item.date}</p>
                    <div className="flex items-center justify-between !mt-5">
                        <h1 className="text-xl font-bold">Total: {item.total}</h1>
                        <p className="font-bold text-xl">Daily: <span className="text-blue-600">{item.dailyTotal}</span></p>
                    </div>
            </div>)}

    </div>
  )
}

export default DashboardStates