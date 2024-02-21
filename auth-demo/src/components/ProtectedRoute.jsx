import { Navigate } from "react-router-dom";
import useAuth from "../context/AuthContext";

export default function ProtectedRoute({ element }) {
    const { auth } = useAuth();
    return auth.user ? element : <Navigate to="/login" />;
}
