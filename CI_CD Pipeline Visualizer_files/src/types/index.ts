export  interface Pipeline {
  id: string;
  name: string;
  repository: string;
  branch: string;
  status: 'success' | 'failed' | 'running' | 'pending';
  duration: number;
  startTime: Date;
  endTime?: Date;
  author: string;
  commit: string;
  stages: Stage[];
}

export interface Stage {
  id: string;
  name: string;
  status: 'success' | 'failed' | 'running' | 'pending';
  duration: number;
  startTime: Date;
  endTime?: Date;
}

export interface DORAMetrics {
  deploymentFrequency: number;
  leadTimeForChanges: number;
  meanTimeToRecovery: number;
  changeFailureRate: number;
}

export interface Repository {
  id: string;
  name: string;
  url: string;
  branch: string;
  isConnected: boolean;
}
 