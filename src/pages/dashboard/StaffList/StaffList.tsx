import { Button, Input, Space, Table, type TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'
import { ImInfo } from 'react-icons/im';
import CustomModal from '../../../components/shared/CustomModal';
import StaffDetailsModal from '../../../components/shared/StaffDetailsModal';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { TbMenu4 } from 'react-icons/tb';

export type TStaffList = {
    "key": string;
    "name": string;
    "email": string;
    "companyName": string;
    "designation": string;
    "action": string;
}
const staffData: TStaffList[] = [
    {
        "key": "MM4178MRV2",
        "name": "Admin Humphrey",
        "email": "mr101@gmail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "AB4578DCD2",
        "name": "Siphokazi Selebe",
        "email": "mr101@gmail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "FF4578EDD4",
        "name": "Alison Moloi",
        "email": "mr101@gmail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "BB4578ED2",
        "name": "Mr. Nadir",
        "email": "xterris@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "FF4578EDD4",
        "name": "Babalwa Moloi",
        "email": "irnabela@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "FH4578ERV2",
        "name": "Rashied Naidoo",
        "email": "codence@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "CY6790FJF7",
        "name": "Candice Ryan",
        "email": "quasiah@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "MM4178MRV2",
        "name": "Mark Russell",
        "email": "xeno@yandex.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "FH4578ERV2",
        "name": "Sharief Isaacs",
        "email": "redaniel@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Manager",
        "action": ""
    },
    {
        "key": "FF4578EDD4",
        "name": "Asad ujjaman",
        "email": "warn@mail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "FH4578ERV2",
        "name": "Shameemah Salie",
        "email": "joie@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "GM4134ER3C",
        "name": "Shameemah Salie",
        "email": "ziar@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "GM4134ER3C",
        "name": "Shameemah Salie",
        "email": "ahana@mail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "FH4578ERV2",
        "name": "Shameemah Salie",
        "email": "ahana@mail.ru",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    },
    {
        "key": "AB4578DCD2",
        "name": "Shameemah Salie",
        "email": "joie@gmail.com",
        "companyName": "(+33)7 00 55 59 27",
        "designation": "Sales executive",
        "action": ""
    }
]



const StaffList = () => {
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [showDetails, setShowDetails] = useState<TStaffList | null>(null)
    const columns: ColumnsType<any> = [
        { title: "Id. no.", dataIndex: "key", key: "key", },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Company Name",
            dataIndex: "companyName",
            key: "companyName",
        },
        {
            title: "Designation",
            dataIndex: "designation",
            key: "designation",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className='flex items-center gap-4'>
                    <p onClick={() => { setShowDetails(record); setShowBookingDetails(true) }} className='cursor-pointer'> <ImInfo className='text-primary' size={20} /> </p>
                </div>
            ),
        },
    ];
    return (
        <div className='bg-white p-4 w-full shadow-lg rounded-lg'>
            <div className="flex items-center justify-between mb-5">
                <h1 className='text-2xl font-semibold'>Employee List</h1>
                <div className="flex items-center gap-5">
                    
                        {/* <Input style={{borderRadius: "50%"}} addonBefore={<p className='w-8 h-8 bg-[#D2EBC5] flex items-center justify-center rounded-full bg-primary'><FiSearch size={15}/></p> } size='large' className='!rounded-full' placeholder="large size"  />                                             */}
                        <Input size='large' className='!rounded-full' placeholder="large size"  />                                            
                    <Button shape="circle" size='large' icon={<TbMenu4 />} />
                    <Button type='primary' size='large' shape="round" icon={<FiPlus size={24} />} iconPosition="start">Add Member</Button>
                </div>
            </div>
            <Table columns={columns} dataSource={staffData} pagination={{ pageSize: 5 }} rowClassName="hover:bg-gray-100" />
            <CustomModal
                open={showBookingDetails}
                setOpen={setShowBookingDetails}
                body={<StaffDetailsModal showDetails={showDetails} />}
                key={'influencer-details'}
                width={550}
            />
        </div>
    )
}

export default StaffList