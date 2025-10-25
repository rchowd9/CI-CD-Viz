import  { AlertTriangle, Bell, CheckCircle } from 'lucide-react';

export default function Alerts() {
  const alerts = [
    {
      id: 1,
      type: 'error',
      title: 'Build Failed: api-backend',
      message: 'Test suite failed with 3 failing tests in authentication module',
      timestamp: '2 minutes ago',
      status: 'active'
    },
    {
      id: 2,
      type: 'warning',
      title: 'High Memory Usage',
      message: 'web-app-frontend build using 85% of available memory',
      timestamp: '15 minutes ago',
      status: 'active'
    },
    {
      id: 3,
      type: 'info',
      title: 'Security Scan Complete',
      message: 'No vulnerabilities found in mobile-app repository',
      timestamp: '1 hour ago',
      status: 'resolved'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'error': return AlertTriangle;
      case 'warning': return Bell;
      case 'info': return CheckCircle;
      default: return Bell;
    }
  };

  const getColors = (type: string) => {
    switch (type) {
      case 'error': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'info': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Alert Management</h2>
        <p className="text-gray-600">Monitor and manage pipeline alerts and notifications</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
              Mark All Read
            </button>
          </div>
        </div>
        
        <div className="divide-y divide-gray-200">
          {alerts.map((alert) => {
            const Icon = getIcon(alert.type);
            const colors = getColors(alert.type);
            
            return (
              <div key={alert.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${colors}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">{alert.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.status === 'active' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{alert.timestamp}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
 