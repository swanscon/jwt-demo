import useAuth from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function Dashboard() {
	const { auth } = useAuth();
	const [data, setData] = useState(null);

	useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/", {
                    headers: {
                        'Authorization': `Bearer ${auth.token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const rData = await response.text();
                setData(rData);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };

        fetchData();
    }, [auth.token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page. {data ? data : 'loading...'}!</p>
        </div>
    );
}
