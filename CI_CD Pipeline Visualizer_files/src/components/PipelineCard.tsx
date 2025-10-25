import  { Clock, User, CheckCircle, AlertCircle, Activity } from 'lucide-react';

interface Pipeline {
  id: string;
  name: string;
  status: 'success' | 'failed' | 'running' | 'pending';
  duration: string;
  branch: string;
  author: string;
  timestamp: string;
  stages: number;
}

interface PipelineCardProps {
  pipeline: Pipeline;
}

export default function PipelineCard({ pipeline }: PipelineCardProps) {
  const statusColors = {
    success: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    running: 'bg-blue-100 text-blue-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  const StatusIcon = pipeline.status === 'success' ? CheckCircle : 
                   pipeline.status === 'failed' ? AlertCircle : Activity;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <StatusIcon className="h-5 w-5 text-gray-400" />
          <h3 className="font-semibold text-gray-900">{pipeline.name}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[pipeline.status]}`}>
          {pipeline.status}
        </span>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span>{pipeline.author}</span>
          <span>•</span>
          <span>{pipeline.branch}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span>{pipeline.duration}</span>
          <span>•</span>
          <span>{pipeline.stages} stages</span>
        </div>
        <div className="text-xs text-gray-500">{pipeline.timestamp}</div>
      </div>
    </div>
  );
}
 