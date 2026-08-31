import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import Revenue from "./pages/Revenue";
import Auth from "./components/Auth";
import ProtectedRoute from "./components/ProtectedRoute"; // <-- Make sure this is imported!

// 1. Create a layout specifically for logged-in users
function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTE: Login screen (No Sidebar) */}
        <Route path="/Auth" element={<Auth />} />

        {/* PROTECTED ROUTES: Only accessible with a token */}
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  {/* Notice how these are now protected inside the layout! */}
                  <Route path="/" element={<Overview />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/revenue" element={<Revenue />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;