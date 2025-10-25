import  { useState, useEffect } from 'react';
import { DORAMetrics } from '../types';

export const useDORAMetrics = () => {
  const [metrics, setMetrics] = useState<DORAMetrics>({
    deploymentFrequency: 12.5,
    leadTimeForChanges: 2.3,
    meanTimeToRecovery: 4.2,
    changeFailureRate: 8.5
  });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      setLoading(false);
    };
    fetchMetrics();
  }, []);

  return { metrics, loading };
};
 