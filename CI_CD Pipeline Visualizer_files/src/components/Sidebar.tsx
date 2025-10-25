import  { Activity, Github, BarChart, Settings } from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
}

export default function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'repositories', label: 'Repositories', icon: Github },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Activity className="w-6 h-6 text-indigo-600" />
          Pipeline Viz
        </h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 ${
              currentPage === item.id ? 'bg-indigo-50 text-indigo-700 border-r-2 border-indigo-700' : 'text-gray-700'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
 