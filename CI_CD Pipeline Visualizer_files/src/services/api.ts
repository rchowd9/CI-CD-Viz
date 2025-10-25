const  API_BASE = 'https://hooks.jdoodle.net';

export const api = {
  async getPipelines() {
    const response = await fetch(`${API_BASE}/api/pipelines`);
    return response.json();
  },

  async getDORAMetrics() {
    const response = await fetch(`${API_BASE}/api/metrics`);
    return response.json();
  },

  async connectRepository(data: any) {
    const response = await fetch(`${API_BASE}/api/repositories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async uploadFiles(files: FileList) {
    const formData = new FormData();
    Array.from(files).forEach(file => formData.append('files', file));
    
    const response = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      body: formData
    });
    return response.json();
  },

  async getRepositories() {
    const response = await fetch(`${API_BASE}/api/repositories`);
    return response.json();
  }
};
 