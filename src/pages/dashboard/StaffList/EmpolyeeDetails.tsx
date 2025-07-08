import React from 'react';
import { Button, Col, Input, Row, Select, Table } from 'antd'
import { FiSearch, FiUnlock } from 'react-icons/fi';
import { LiaEdit } from 'react-icons/lia';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ProfileEditModal from './ProfileEditModal';
import type { ColumnsType } from 'antd/es/table';
import { WorkListData } from '../../../data/WorkListData';
import { TbMenu4 } from 'react-icons/tb';
import styles from "./ExployeeTable.module.css"
import { Link } from 'react-router-dom';
import { ImInfo } from 'react-icons/im';
import CustomModal from '../../../components/shared/CustomModal';
import StaffDetailsModal from '../../../components/shared/StaffDetailsModal';


const EmpolyeeDetails = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showWorkDetails, setShowWorkDetails] = React.useState(false);
    const [workDetails, setWorkDetails] = React.useState<any>(null);

    const data = [
        { name: 'Jan', total: 2000, pv: 2400, amt: 2400 },
        { name: 'Feb', total: 2200, amt: 2210 },
        { name: 'Mar', total: 2060, amt: 2290 },
        { name: 'Apr', total: 1780, amt: 2000 },
        { name: 'May', total: 1890, amt: 2181 },
        { name: 'Jun', total: 1490, amt: 2500 },
        { name: 'Jul', total: 2490, amt: 2100 },
        { name: 'Aug', total: 1490, amt: 2100 },
        { name: 'Sep', total: 1990, amt: 2100 },
        { name: 'Oct', total: 2090, amt: 2100 },
        { name: 'Nov', total: 1890, amt: 2100 },
        { name: 'Dec', total: 1990, amt: 2100 },
    ];

    const columns: ColumnsType<any> = [
        {
            title: "Quote No.",
            dataIndex: "quoteNo",
            key: "quoteNo",
        },
        {
            title: "Farmer Name",
            dataIndex: "farmerName",
            key: "farmerName",
        },
        {
            title: "Manager",
            dataIndex: "manager",
            key: "manager",
        },
        {
            title: "Quote Receipt",
            dataIndex: "quoteReceipt",
            key: "quoteReceipt",
        },
        {
            title: "Weight",
            dataIndex: "weight",
            key: "weight",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Delivery Time",
            dataIndex: "deliveryTime",
            key: "deliveryTime",
        },
        {
            title: "Status",
            key: "status",
            render: (_, record) => (
                <span className={`px-2 py-1 rounded-full text-sm ${record.status === "Pending" ? "bg-yellow-100 text-yellow-800" : record.status === "Approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {record.status}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className='flex items-center gap-4'>
                    <p className='cursor-pointer'> <Link to={`/${record?.designation === "Manaager" ? "manager" : "employee"}-details/${record.key}`}><ImInfo className='text-primary' size={20} /></Link> </p>
                    <p onClick={() => { setWorkDetails(record); setShowWorkDetails(true) }} className='cursor-pointer'><FiUnlock className='text-primary hover:text-red-600' size={20} /> </p>
                </div>
            ),
        },
    ]

    return (
        <div className='px-2 '>
            <div className="flex justify-between pt-10 rounded-2xl  mb-10 gap-5 ">
                <Row gutter={16}>
                    <Col span={16}>

                        {/* -------------Employee Details  -------- */}
                        <div className=' bg-white p-4 rounded-2xl shadow-sm flex gap-5 relative'>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <div className="w-full">
                                        <div className="w-full h-[200px]  rounded-2xl mb-4">
                                            <img src="https://images.pexels.com/photos/2080383/pexels-photo-2080383.jpeg" className='w-full h-full object-cover rounded-2xl border shadow-lg' alt="" />
                                        </div>
                                        <div className="relative">
                                            <div className="text-center text-lg mt-2.5">
                                                <p className="">Asad Ujjaman</p>
                                                <p className='text-[#006EEE]'>Sales Excutive</p>
                                            </div>
                                            <FiUnlock size={20} color='#A1A1A1' className='absolute top-0 right-0' />
                                        </div>
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <Row>
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Name:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>Asadujjaman Mahfuz</p>
                                        </Col>
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Position:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>Sales Excutive</p>
                                        </Col>
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Position:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>Manager</p>
                                        </Col>                                    

                                    
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Id. no.:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>BB4578EED2</p>
                                        </Col>                                    

                                    
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Gender</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>Male</p>
                                        </Col>                                    

                                    
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Date of birth:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>12 nov, 2024</p>
                                        </Col>                                    

                                    
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Contact Number:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-nowrap text-lg'>0173 155 456</p>
                                        </Col>                                    

                                    
                                        <Col span={10}>
                                            <p className='text-[#A1A1A1] mb-1 text-lg'>Address:</p>
                                        </Col>
                                        <Col span={14}>
                                            <p className='text-[#5C5C5C] text-lg'>284 Fafforil Dr, Mount Frere Eastern Cape-5088 South Africa</p>
                                        </Col> 
                                    </Row>                                    
                                                                           
                                    <div className="flex items-center gap-3 absolute top-0 right-0 cursor-pointer">
                                        <RiDiscountPercentLine size={24} color='#58553A' />
                                        <LiaEdit onClick={() => setIsOpen(!isOpen)} size={24} color='#58553A' />
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                    <Col span={8}>
                        {/* ----------- Chart Section ----------- */}
                        <div className="">
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <p className='text-[16px] font-medium text-nowrap'>Performance Statistics</p>
                                <Select defaultValue="2020" size='small' style={{ background: "#F4F4F4", width: "100px", height: "30px" }} className='!rounded-full !text-sm !font-normal' >
                                    <Select.Option value="2020">2020</Select.Option>
                                    <Select.Option value="2021">2021</Select.Option>
                                    <Select.Option value="2022">2022</Select.Option>
                                    <Select.Option value="2023">2023</Select.Option>
                                </Select>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="w-[11px] h-[11px] bg-[#6DBD44] rounded-full"></div>
                                <p className='text-sm ml-2'>Total Sales : R20,204,0</p>
                            </div>
                            <div className="flex items-center mb-8">
                                <div className="w-[11px] h-[11px] bg-[#6CA0DC] rounded-full"></div>
                                <p className='text-sm ml-2'>Total Sales : R20,204,0</p>
                            </div>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={data} margin={{
                                    top: 5,
                                    right: 20,
                                    left: 0,
                                    bottom: 5,
                                }}>
                                    <YAxis stroke='0' />
                                    <XAxis dataKey="name" scale="point" />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <CartesianGrid vertical={false} />
                                    <Bar barSize={10} dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Col>
                </Row>
                {/* -------------Employee Details  -------- */}
            </div>
            {/* ---------- Profile Edit Modal ----------- */}
            <ProfileEditModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="bg-white rounded-t-[50px] pt-6 ">
                <div className="flex items-center justify-between px-4 mb-5">
                    <h1 className="text-xl font-medium text-[#222222]">Work list of employees</h1>
                    <div className="flex items-center gap-5 w-1/4">
                        <div className="relative w-full">
                            <Input size='large' className=' !rounded-full !pl-14' placeholder="Search by Quote No. " />
                            <div className="w-8 h-8 bg-[#D2EBC5] flex items-center justify-center rounded-full"
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "5px",
                                    transform: "translateY(-50%)",
                                    zIndex: 1,
                                }}
                            >
                                <FiSearch size={20} />
                            </div>
                        </div>
                        <Button shape="circle" size='large' icon={<TbMenu4 />} />
                    </div>
                </div>
                <Table pagination={{ pageSize: 5 }} columns={columns} dataSource={WorkListData} size="large" className={`${styles.customTable} workTable`} />

                <CustomModal
                    open={showWorkDetails}
                    setOpen={setShowWorkDetails}
                    title="Work Details"
                    body={<StaffDetailsModal showDetails={showWorkDetails} />}
                />
            </div>
        </div >
    )
}

export default EmpolyeeDetails