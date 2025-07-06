import { Select } from 'antd';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    earn: 2000,
    profit: 400,
    amt: 2400,
  },
  {
    name: 'Feb',
    earn: 2200,
    profit: 210,
  },
  {
    name: 'Mar',
    earn: 2060,
    profit: 290,
  },
  {
    name: 'Apr',
    earn: 1780,
    profit: 200,
  },
  {
    name: 'May',
    earn: 1890,
    profit: 218,
  },
  {
    name: 'Jun',
    earn: 1490,
    profit: 250,
  },
  {
    name: 'Jul',
    earn: 2490,
    profit: 210,
  },
  {
    name: 'Aug',
    earn: 1490,
    profit: 200,
  },
  {
    name: 'Sep',
    earn: 1990,
    profit: 210,
  },
  {
    name: 'Oct',
    earn: 2090,
    profit: 201,
  },
  {
    name: 'Nov',
    earn: 1890,
    profit: 210,
  },
  {
    name: 'Dec',
    earn: 1990,
    profit: 210,
  },
];
const { Option } = Select;

const EarningChart = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className='bg-white p-4  shadow-lg rounded-lg mt-5'>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Total Quotes <span className="font-normal">Statistics</span></h1>
        <Select
          size="small"
          className='w-32 h-[40px]'
          onChange={handleChange}
          defaultValue="jack"
        >
          <Option value="jack">Jack</Option>
          <Option value="yiminghe">Yiminghe</Option>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={220}>

        <BarChart data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6DBD44" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6DBD44" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="earn" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EarningChart