interface  Notification {
  id: number;
  type: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationsProps {
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
}

export default function Notifications({ notifications, setNotifications }: NotificationsProps) {
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
      <div className="bg-white rounded-lg border border-gray-200 divide-y">
        {notifications.map((notification) => (
          <div key={notification.id} className={`p-4 ${!notification.read ? 'bg-blue-50' : ''}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.time}</p>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Mark as read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 