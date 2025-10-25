import  { useState } from 'react';
import { Github, Plus, Search, CheckCircle } from 'lucide-react';

interface RepositoriesProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

export default function Repositories({ isConnected, setIsConnected }: RepositoriesProps) {
  const [token, setToken] = useState('');
  const [repos, setRepos] = useState([
    { name: 'frontend-app', url: 'https://github.com/user/frontend-app', connected: true, status: 'active' },
    { name: 'api-service', url: 'https://github.com/user/api-service', connected: true, status: 'active' },
    { name: 'mobile-app', url: 'https://github.com/user/mobile-app', connected: false, status: 'inactive' },
  ]);

  const connectGitHub = async () => {
    if (!token) return;
    
    try {
      const response = await fetch(`https://hooks.jdoodle.net?url=https://api.github.com/user/repos`, {
        method: 'GET',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      if (response.ok) {
        setIsConnected(true);
        const data = await response.json();
        setRepos(data.slice(0, 10).map((repo: any) => ({
          name: repo.name,
          url: repo.html_url,
          connected: false,
          status: 'inactive'
        })));
      }
    } catch (error) {
      console.error('GitHub connection failed:', error);
    }
  };

  if (!isConnected) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
          <img 
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400&h=300&fit=crop"
            alt="GitHub Integration"
            className="w-48 h-36 mx-auto mb-6 rounded-lg object-cover"
          />
          <Github className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Connect GitHub</h2>
          <p className="text-gray-600 mb-6">Connect your GitHub account to start monitoring your repositories</p>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="GitHub Personal Access Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={connectGitHub}
              disabled={!token}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Connect GitHub
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            You'll need a GitHub Personal Access Token with repo access
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">Repositories</h2>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Repository
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search repositories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {repos.map((repo, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <Github className="w-8 h-8 text-gray-600" />
                <div>
                  <h3 className="font-medium text-gray-900">{repo.name}</h3>
                  <p className="text-sm text-gray-600">{repo.url}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  repo.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {repo.status}
                </span>
                
                {repo.connected ? (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Connected</span>
                  </div>
                ) : (
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    Connect
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 