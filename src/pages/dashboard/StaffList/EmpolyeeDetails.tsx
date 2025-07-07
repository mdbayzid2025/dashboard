import { Select } from 'antd'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const EmpolyeeDetails = () => {
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

    return (
        <div>
            <div className="flex justify-between p-10 rounded-2xl  mb-5">
                <h1>asdsad</h1>
                <div className="w-1/3">
                    <div className="flex items-center justify-between gap-2 mb-4">
                        <p className='text-[16px] font-medium text-nowrap'>Performance Statistics</p>
                        <Select defaultValue="2020" size='small' style={{ background: "transparent", width: "100px", height: "30px" }} className='!rounded-full !text-sm !font-normal' >
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
                            <YAxis stroke='0'/>
                            <XAxis dataKey="name" scale="point"/>
                            <Tooltip />
                            {/* <Legend /> */}
                            <CartesianGrid vertical={false} />
                            <Bar barSize={10} dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div >
    )
}

export default EmpolyeeDetails