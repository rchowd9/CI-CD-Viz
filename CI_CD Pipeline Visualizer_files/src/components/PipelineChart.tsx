import  { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', success: 24, failed: 3 },
  { name: 'Tue', success: 18, failed: 2 },
  { name: 'Wed', success: 32, failed: 5 },
  { name: 'Thu', success: 28, failed: 1 },
  { name: 'Fri', success: 21, failed: 4 },
  { name: 'Sat', success: 15, failed: 2 },
  { name: 'Sun', success: 12, failed: 1 }
];

export const PipelineChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Pipeline Activity (Last 7 Days)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="success" fill="#10b981" name="Success" />
          <Bar dataKey="failed" fill="#ef4444" name="Failed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
 