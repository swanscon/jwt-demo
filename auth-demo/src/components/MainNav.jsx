import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../context/AuthContext";

export default function MainNav() {

    const { logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

	return (
		<div>
			<header>
				<Navbar expand="lg" className="bg-body-secondary">
					<Nav className="me-auto">
						<Container>
							<NavLink to="/">Dashboard</NavLink>
						</Container>
                        <Container>
							<NavLink to="/about">About</NavLink>
						</Container>
						<Container>
							<NavLink to="#" onClick={handleLogout}>Logout</NavLink>
						</Container>
					</Nav>
				</Navbar>
			</header>
		</div>
	);
}
