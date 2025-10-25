import  { CheckCircle, X, Clock, Zap, Github, AlertTriangle, TrendingUp, Users, Server, FileText, Upload, ArrowLeft } from 'lucide-react';
import PerformanceChart from '../components/PerformanceChart';

export default function Dashboard() {
  const stats = [
    { label: 'Success Rate', value: '94.2%', icon: CheckCircle, color: 'text-green-600', change: '+2.1%' },
    { label: 'Failed Builds', value: '3', icon: X, color: 'text-red-600', change: '-5' },
    { label: 'Avg Build Time', value: '4m 32s', icon: Clock, color: 'text-blue-600', change: '-12s' },
    { label: 'Deployments', value: '127', icon: Zap, color: 'text-purple-600', change: '+23' },
  ];

  const recentPipelines = [
    { name: 'frontend-app', status: 'success', duration: '3m 45s', branch: 'main', user: 'alice' },
    { name: 'api-service', status: 'failed', duration: '2m 12s', branch: 'develop', user: 'bob' },
    { name: 'mobile-app', status: 'running', duration: '1m 30s', branch: 'feature/auth', user: 'charlie' },
    { name: 'web-components', status: 'success', duration: '5m 21s', branch: 'main', user: 'alice' },
    { name: 'data-pipeline', status: 'pending', duration: '-', branch: 'hotfix/fix-bug', user: 'david' },
  ];

  const environments = [
    { name: 'Production', status: 'healthy', version: 'v2.1.3', health: 99.9 },
    { name: 'Staging', status: 'warning', version: 'v2.2.0-rc1', health: 95.2 },
    { name: 'Development', status: 'healthy', version: 'v2.2.0-alpha', health: 98.1 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : stat.change.startsWith('-') && stat.change !== '-' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Build Performance</h3>
          <PerformanceChart />
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Environment Health</h3>
          <div className="space-y-4">
            {environments.map((env, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{env.name}</p>
                  <p className="text-sm text-gray-600">{env.version}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    env.status === 'healthy' ? 'bg-green-100 text-green-800' :
                    env.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {env.status}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{env.health}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Pipelines</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Repository</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Branch</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">User</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Duration</th>
                <th className="text-left py-3 text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentPipelines.map((pipeline, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-900">{pipeline.name}</span>
                  </td>
                  <td className="py-3 text-sm text-gray-600">{pipeline.branch}</td>
                  <td className="py-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">{pipeline.user}</span>
                  </td>
                  <td className="py-3 text-sm text-gray-600">{pipeline.duration}</td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      {pipeline.status === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                      {pipeline.status === 'failed' && <AlertTriangle className="w-4 h-4 text-red-600" />}
                      {pipeline.status === 'running' && <Clock className="w-4 h-4 text-blue-600" />}
                      {pipeline.status === 'pending' && <Clock className="w-4 h-4 text-gray-600" />}
                      <span className={`text-sm capitalize ${
                        pipeline.status === 'success' ? 'text-green-600' :
                        pipeline.status === 'failed' ? 'text-red-600' :
                        pipeline.status === 'running' ? 'text-blue-600' :
                        'text-gray-600'
                      }`}>
                        {pipeline.status}
                      </span>
                    </div>
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
 