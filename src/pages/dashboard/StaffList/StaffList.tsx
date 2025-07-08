import { Button, Input, Modal, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { FiLock, FiPlus, FiSearch, FiUnlock } from 'react-icons/fi';
import { ImInfo } from 'react-icons/im';
import { TbMenu4 } from 'react-icons/tb';
import { staffData } from '../../../data/StaffData';
import EmpolyeeDetails from './EmpolyeeDetails';
import ManagerDetails from './ManagerDetails';





const StaffList = () => {

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [showManagerDetails, setShowManagerDetails] = useState<boolean>(false);
    const [showEmployeeDetails, setShowEmployeeDetails] = useState<boolean>(false);


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
                    <ImInfo
                        onClick={() => {
                            if (record?.designation === "Manager") {
                                setShowManagerDetails(true);
                            } else {
                                setShowEmployeeDetails(true);
                            }
                            setShowDetails(true);
                        }}
                        className='text-primary cursor-pointer' size={20} />
                    <p className='cursor-pointer'><FiUnlock className='text-primary hover:text-red-600' size={20} /> </p>
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

    const itemRender = (_: any, type: any, originalElement: any) => {
        if (type === 'prev') {
            return <a>〈 Previous</a>;
        }
        if (type === 'next') {
            return <a>Next 〉</a>;
        }
        return originalElement;
    };

    console.log('showManagerDetails', showManagerDetails);

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
            <Table size='large' columns={columns}
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

            {/* <Modal centered open={showDetails} onCancel={() => {
                setShowDetails(false)
                showManagerDetails ? setShowManagerDetails(false) : setShowEmployeeDetails(false)
                }} footer={null} >
                {showManagerDetails && <ManagerDetails /> }
                {showEmployeeDetails && <EmpolyeeDetails />}
            </Modal> */}
            <Modal
                centered
                title={<p className='text-2xl text-[#222222]'>{showManagerDetails ? "Manager Details" : "Employee Details"}</p>}
                className='staff-details-modal '
                open={showDetails}
                onCancel={() => {
                    setShowDetails(false)
                    showManagerDetails ? setShowManagerDetails(false) : setShowEmployeeDetails(false)
                }}
                footer={null}
                width={1200}
                height="80%"
                styles={{
                    content: {
                        background: '#e3e3e3'
                    },
                    header: {
                        background: '#e3e3e3'
                    }
                }}
            >
                <div className="hiddenScrollBar overflow-y-auto h-[70vh] ">
                    {showManagerDetails && <ManagerDetails />}
                    {showEmployeeDetails && <EmpolyeeDetails />}
                </div>

            </Modal>
        </div>
    )
}

export default StaffList