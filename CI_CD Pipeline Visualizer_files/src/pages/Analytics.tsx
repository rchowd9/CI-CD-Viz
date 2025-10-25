import  { TrendingUp, Clock, AlertTriangle, CheckCircle, BarChart, Activity } from 'lucide-react';
import PerformanceChart from '../components/PerformanceChart';

export default function Analytics() {
  const metrics = [
    { label: 'Deployment Frequency', value: '2.3/day', trend: '+12%', icon: TrendingUp },
    { label: 'Lead Time', value: '2.1 hours', trend: '-8%', icon: Clock },
    { label: 'MTTR', value: '18 mins', trend: '-15%', icon: AlertTriangle },
    { label: 'Change Failure Rate', value: '5.8%', trend: '-3%', icon: CheckCircle },
  ];

  const teamMetrics = [
    { name: 'Alice Johnson', commits: 47, deployments: 12, success: 96 },
    { name: 'Bob Smith', commits: 32, deployments: 8, success: 89 },
    { name: 'Charlie Brown', commits: 28, deployments: 6, success: 94 },
    { name: 'David Wilson', commits: 15, deployments: 3, success: 91 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Performance Analytics</h2>
        <p className="text-gray-600">DORA metrics and pipeline insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="w-6 h-6 text-indigo-600" />
              <span className={`text-sm font-medium ${
                metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
            <p className="text-sm text-gray-600">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart className="w-5 h-5" />
            Build Times Trend
          </h3>
          <PerformanceChart />
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Success Rate by Repository
          </h3>
          <div className="space-y-4">
            {['frontend-app', 'api-service', 'mobile-app', 'web-components'].map((repo, i) => {
              const rate = [96, 89, 94, 98][i];
              return (
                <div key={repo} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{repo}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${rate}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-10 text-right">{rate}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Developer</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Commits</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Deployments</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Success Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamMetrics.map((member, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-900">{member.name}</td>
                  <td className="py-3 text-sm text-gray-600">{member.commits}</td>
                  <td className="py-3 text-sm text-gray-600">{member.deployments}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      member.success >= 95 ? 'bg-green-100 text-green-800' :
                      member.success >= 90 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {member.success}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
 