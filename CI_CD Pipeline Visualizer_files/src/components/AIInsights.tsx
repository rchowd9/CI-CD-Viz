import  { Zap, TrendingUp, AlertCircle, Clock } from 'lucide-react';

interface Insight {
  type: 'optimization' | 'warning' | 'trend';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

export default function AIInsights() {
  const insights: Insight[] = [
    {
      type: 'optimization',
      title: 'Reduce Build Time',
      description: 'Test stage takes 65% of total pipeline time. Consider parallel testing.',
      impact: 'high'
    },
    {
      type: 'warning',
      title: 'Deployment Frequency',
      description: 'Deploy frequency dropped 40% this week compared to last week.',
      impact: 'medium'
    },
    {
      type: 'trend',
      title: 'Success Rate Improving',
      description: 'Pipeline success rate increased to 94% from 87% last month.',
      impact: 'low'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'optimization': return Zap;
      case 'warning': return AlertCircle;
      case 'trend': return TrendingUp;
      default: return Zap;
    }
  };

  const getColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Zap className="h-5 w-5 text-purple-600" />
        <h3 className="font-semibold text-gray-900">AI Insights</h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = getIcon(insight.type);
          return (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <Icon className={`h-4 w-4 mt-0.5 ${getColor(insight.impact)}`} />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{insight.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{insight.description}</p>
                <span className={`inline-block text-xs px-2 py-1 rounded mt-2 bg-white ${getColor(insight.impact)}`}>
                  {insight.impact} impact
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 