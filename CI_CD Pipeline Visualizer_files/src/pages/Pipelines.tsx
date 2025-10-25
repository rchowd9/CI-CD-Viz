import  { usePipelines } from '../hooks/usePipelines';
import { PipelineCard } from '../components/PipelineCard';
import { Activity, RefreshCw } from 'lucide-react';

export const Pipelines = () => {
  const { pipelines, loading, refresh } = usePipelines();

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Pipelines</h1>
          <p className="text-gray-600">Monitor all your CI/CD pipeline runs</p>
        </div>
        <button
          onClick={refresh}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Activity className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6">
          {pipelines.map(pipeline => (
            <PipelineCard key={pipeline.id} pipeline={pipeline} />
          ))}
        </div>
      )}
    </div>
  );
};
 