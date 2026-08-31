import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wider text-blue-500">CreatorIQ</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link to="/" className={`block p-3 rounded-lg transition-colors ${isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
          Overview
        </Link>
        <Link to="/analytics" className={`block p-3 rounded-lg transition-colors ${isActive('/analytics') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
          Analytics
        </Link>
        <Link to="/revenue" className={`block p-3 rounded-lg transition-colors ${isActive('/revenue') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
          Revenue Insights
        </Link>
      </nav>
    </div>
  );
}