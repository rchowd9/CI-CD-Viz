import  { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', buildTime: 4.2, deployments: 3 },
  { name: 'Tue', buildTime: 3.8, deployments: 5 },
  { name: 'Wed', buildTime: 4.1, deployments: 4 },
  { name: 'Thu', buildTime: 3.9, deployments: 6 },
  { name: 'Fri', buildTime: 4.3, deployments: 2 },
  { name: 'Sat', buildTime: 3.7, deployments: 1 },
  { name: 'Sun', buildTime: 4.0, deployments: 2 },
];

export default function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="buildTime" 
          stroke="#6366f1" 
          strokeWidth={2}
          name="Build Time (min)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
 