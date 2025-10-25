import  { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  description?: string;
}

export const MetricsCard = ({ title, value, unit, trend, trendValue, description }: MetricsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">{value}</span>
            {unit && <span className="ml-1 text-sm text-gray-500">{unit}</span>}
          </div>
        </div>
        {trend && trendValue && (
          <div className={`flex items-center text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {trendValue}
          </div>
        )}
      </div>
      {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
    </div>
  );
};
 