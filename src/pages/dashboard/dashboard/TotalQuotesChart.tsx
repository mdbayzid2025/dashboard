import { Select } from 'antd';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    total: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    total: 2200,
    amt: 2210,
  },
  {
    name: 'Mar',
    total: 2060,
    amt: 2290,
  },
  {
    name: 'Apr',
    total: 1780,
    amt: 2000,
  },
  {
    name: 'May',
    total: 1890,
    amt: 2181,
  },
  {
    name: 'Jun',
    total: 1490,
    amt: 2500,
  },
  {
    name: 'Jul',
    total: 2490,
    amt: 2100,
  },  
  {
    name: 'Aug',
    total: 1490,
    amt: 2100,
  },
  {
    name: 'Sep',
    total: 1990,
    amt: 2100,
  },
  {
    name: 'Oct',
    total: 2090,
    amt: 2100,
  },
  {
    name: 'Nov',
    total: 1890,
    amt: 2100,
  },
  {
    name: 'Dec',
    total: 1990,
    amt: 2100,
  },
];
const {Option} = Select;

const TotalQuotes = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='bg-white p-4 w-full shadow-lg rounded-lg'>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Total Quotes <span className="font-normal">Statistics</span></h1>
        <Select
          size="small"
          className='w-32 h-[40px]'         
          onChange={handleChange}   
          defaultValue="2022"      
        >
          <Option value="2022">2022</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
        </Select>
      </div>      
      <ResponsiveContainer width="100%" height={220}>
      
      <AreaChart data={data}
  margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#6DBD44" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#6DBD44" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#4D8630" fillOpacity={1} fill="url(#total)" />  
</AreaChart>
    </ResponsiveContainer>
    </div>
  )
}

export default TotalQuotes