import  { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Repositories from './pages/Repositories';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

type Page = 'dashboard' | 'repositories' | 'analytics' | 'settings' | 'notifications';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isConnected, setIsConnected] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'error', message: 'Build failed for api-service', time: '2 min ago', read: false },
    { id: 2, type: 'success', message: 'Deployment successful for frontend-app', time: '15 min ago', read: false },
    { id: 3, type: 'warning', message: 'Build time increased by 30%', time: '1 hour ago', read: true },
  ]);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'repositories': return <Repositories isConnected={isConnected} setIsConnected={setIsConnected} />;
      case 'analytics': return <Analytics />;
      case 'settings': return <Settings />;
      case 'notifications': return <Notifications notifications={notifications} setNotifications={setNotifications} />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col">
        <Header 
          setCurrentPage={setCurrentPage} 
          unreadCount={notifications.filter(n => !n.read).length}
        />
        <main className="flex-1 p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
 