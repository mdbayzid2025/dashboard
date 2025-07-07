import { Button, Flex, Input, Space, Table, type TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'
import { ImInfo } from 'react-icons/im';
import CustomModal from '../../../components/shared/CustomModal';
import StaffDetailsModal from '../../../components/shared/StaffDetailsModal';
import { FiLock, FiPlus, FiSearch, FiUnlock } from 'react-icons/fi';
import { TbMenu4 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { staffData, type TStaffList } from '../../../data/StaffData';






const StaffList = () => {
    const [showBookingDetails, setShowBookingDetails] = useState(false);
    const [showDetails, setShowDetails] = useState<TStaffList | null>(null);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);


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
                    <p  className='cursor-pointer'> <Link to={`/${record?.designation ==="Manaager" ? "manager" : "employee"}-details/${record.key}`}><ImInfo className='text-primary' size={20} /></Link> </p>
                    <p  onClick={() => { setShowDetails(record); setShowBookingDetails(true) }} className='cursor-pointer'><FiUnlock className='text-primary hover:text-red-600' size={20} /> </p>
                </div>
            ),
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedKeys: any) => {
            setSelectedRowKeys(selectedKeys);
        },
    };

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>〈 Previous</a>;
        }
        if (type === 'next') {
            return <a>Next 〉</a>;
        }
        return originalElement;
    };

    return (
        <div className='bg-white p-4 w-full shadow-lg rounded-lg'>
            <div className="flex items-center justify-between mb-5">
                <h1 className='text-2xl font-semibold'>Employee List</h1>
                <div className="flex items-center gap-5">
                    <FiLock size={24} className='text-[#A1A1A1]' />
                    <FiUnlock size={24} className='text-[#A1A1A1]' />
                    <div className="relative">
                        <Input size='large' className='!rounded-full !pl-14' placeholder="large size" />
                        <div className='w-8 h-8 bg-[#D2EBC5] flex items-center justify-center rounded-full'
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '5px',
                                transform: 'translateY(-50%)',
                                zIndex: 1,
                            }}>
                            <FiSearch size={20} />
                        </div>
                    </div>
                    <Button shape="circle" size='large' icon={<TbMenu4 />} />
                    <Button type='primary' size='large' shape="round" icon={<FiPlus size={24} />} iconPosition="start">Add Member</Button>
                </div>
            </div>
            {/* ------------Table ----------- */}
            <Table style={{ fontSize: "12px !important" }} size='large' columns={columns}
                rowSelection={{ type: 'checkbox', ...rowSelection, }}
                dataSource={staffData}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: false,
                    showTotal: (total, range) => (
                        <span className="ant-pagination-total-text">
                            Showing {range[0]}-{range[1]} of {total}
                        </span>
                    ),
                    itemRender: itemRender,
                }}              
            />

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