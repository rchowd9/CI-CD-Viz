import  { Bell, User } from 'lucide-react';

interface HeaderProps {
  setCurrentPage: (page: any) => void;
  unreadCount: number;
}

export default function Header({ setCurrentPage, unreadCount }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900">CI/CD Pipeline Monitor</h2>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentPage('notifications')}
            className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setCurrentPage('settings')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
 