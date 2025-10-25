import  { Shield, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface SecurityScanProps {
  repository: string;
  status: 'passed' | 'failed' | 'scanning';
  vulnerabilities: number;
  lastScan: string;
}

export default function SecurityScanner({ repository, status, vulnerabilities, lastScan }: SecurityScanProps) {
  const statusConfig = {
    passed: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    failed: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    scanning: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-gray-400" />
          <h3 className="font-medium text-gray-900">Security Scan</h3>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${config.bg}`}>
          <StatusIcon className={`h-4 w-4 ${config.color}`} />
          <span className={`text-xs font-medium ${config.color}`}>{status}</span>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 space-y-1">
        <div>{repository}</div>
        <div>{vulnerabilities} vulnerabilities found</div>
        <div className="text-xs text-gray-500">Last scan: {lastScan}</div>
      </div>
    </div>
  );
}
 