import { Select } from 'antd';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const { Option } = Select;

// Sample data
const data = [
  { name: 'Jan', total: 2000 },
  { name: 'Feb', total: 2200 },
  { name: 'Mar', total: 2060 },
  { name: 'Apr', total: 1780 },
  { name: 'May', total: 1890 },
  { name: 'Jun', total: 1490 },
  { name: 'Jul', total: 2490 },
  { name: 'Aug', total: 1490 },
  { name: 'Sep', total: 1990 },
  { name: 'Oct', total: 2090 },
  { name: 'Nov', total: 550 },
  { name: 'Dec', total: 520 },
];

// Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    return (
      <div className="bg-black text-white p-2 rounded shadow text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>{payload[0].value}tn</span>
        </div>
      </div>
    );
  }
  return null;
};


const SoldFertiliser = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="bg-white p-4 w-full shadow-lg rounded-xl">
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-2xl">
          Sold Fertiliser <span className="font-normal">Statistics</span>
        </h1>
        <Select
          size="small"
          className="w-32 h-[40px]"
          onChange={handleChange}
          defaultValue="2022"
        >
           <Option value="2022">2022</Option>
          <Option value="2023">2023</Option>
          <Option value="2024">2024</Option>
        </Select>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 30, right: 0, left: 15, bottom: 0 }}>
          <CartesianGrid horizontal={false} />
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            dataKey="total"
            stroke="#00C37E"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}            
          />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SoldFertiliser;
