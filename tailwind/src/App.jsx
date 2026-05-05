import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import Download from "./components/Download.jsx";
import Help from "./components/Help.jsx";
import About from "./components/About .jsx";
import login from "./components/About .jsx";
import "./index.css";
// import Header from './components/Header.jsx'
import Navbar from "./components/Navbar.jsx";
import Auth from "./components/Auth.jsx";
import Private from "./components/Private.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Subscription from "./components/pages/Subscription.jsx";
import Payments from "./components/pages/Payments.jsx";
import Sales from "./components/pages/Sales.jsx";
import Inventory from "./components/pages/Inventory.jsx";
function App() {
  // const location = useLocation();

  const hideLayout =
    location.pathname === "/auth" || location.pathname === "/dashboard";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/download" element={<Download />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/help" element={<Help />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </>
  );
}

export default App;
