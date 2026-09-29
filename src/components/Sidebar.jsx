import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- Added useNavigate

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate(); // <-- Initialized navigate
  
  const isActive = (path) => location.pathname === path;

  // <-- Added logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

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
       <Link to="/audience" className={`block p-3 rounded-lg transition-colors ${isActive('/audience') ? 'bg-blue-600' : 'hover:bg-gray-800'}`}>
          Audience Analytics
        </Link>
      </nav>

      {/* <-- Added Logout Button Section at the bottom --> */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center p-3 text-red-400 hover:text-white hover:bg-red-600 rounded-lg transition-colors font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );
}