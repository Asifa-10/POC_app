import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import PricingTable from './pages/PricingTable';

function App() {
  return (
    <div className="min-h-full bg-blue-950 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white p-4 rounded-lg">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/pricing" element={<PricingTable/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;