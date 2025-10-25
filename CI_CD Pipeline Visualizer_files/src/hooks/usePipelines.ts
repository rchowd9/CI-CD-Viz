import  { useState, useEffect } from 'react';
import { Pipeline } from '../types';

const mockPipelines: Pipeline[] = [
  {
    id: '1',
    name: 'main-build',
    repository: 'acme/frontend',
    branch: 'main',
    status: 'success',
    duration: 240,
    startTime: new Date(Date.now() - 300000),
    endTime: new Date(Date.now() - 60000),
    author: 'john.doe',
    commit: 'abc123f',
    stages: [
      { id: '1', name: 'Build', status: 'success', duration: 120, startTime: new Date(Date.now() - 300000), endTime: new Date(Date.now() - 180000) },
      { id: '2', name: 'Test', status: 'success', duration: 90, startTime: new Date(Date.now() - 180000), endTime: new Date(Date.now() - 90000) },
      { id: '3', name: 'Deploy', status: 'success', duration: 30, startTime: new Date(Date.now() - 90000), endTime: new Date(Date.now() - 60000) }
    ]
  },
  {
    id: '2',
    name: 'feature-auth',
    repository: 'acme/backend',
    branch: 'feature/auth',
    status: 'failed',
    duration: 180,
    startTime: new Date(Date.now() - 600000),
    endTime: new Date(Date.now() - 420000),
    author: 'jane.smith',
    commit: 'def456g',
    stages: [
      { id: '1', name: 'Build', status: 'success', duration: 100, startTime: new Date(Date.now() - 600000), endTime: new Date(Date.now() - 500000) },
      { id: '2', name: 'Test', status: 'failed', duration: 80, startTime: new Date(Date.now() - 500000), endTime: new Date(Date.now() - 420000) }
    ]
  },
  {
    id: '3',
    name: 'hotfix-security',
    repository: 'acme/api',
    branch: 'hotfix/security',
    status: 'running',
    duration: 150,
    startTime: new Date(Date.now() - 150000),
    author: 'bob.wilson',
    commit: 'ghi789h',
    stages: [
      { id: '1', name: 'Build', status: 'success', duration: 90, startTime: new Date(Date.now() - 150000), endTime: new Date(Date.now() - 60000) },
      { id: '2', name: 'Test', status: 'running', duration: 60, startTime: new Date(Date.now() - 60000) }
    ]
  }
];

export const usePipelines = () => {
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPipelines = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPipelines(mockPipelines);
      } catch (error) {
        console.error('Failed to fetch pipelines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPipelines();
    const interval = setInterval(fetchPipelines, 30000);
    return () => clearInterval(interval);
  }, []);

  return { pipelines, loading, refresh: () => setLoading(true) };
};
 