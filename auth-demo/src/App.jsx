import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import MainNav from "./components/MainNav";
import LoginPage from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./components/About";

function App() {
	return (
		<>
			<AuthProvider>
				<MainNav />
				<Routes>
					<Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
