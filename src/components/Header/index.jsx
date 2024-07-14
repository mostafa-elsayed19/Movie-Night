// import Nav from "react-bootstrap/Nav";
// import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaStar } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
	const favoriteMovies = useSelector(
		(state) => state.favorites.favoriteMovies
	);
	// useEffect(() => {}, [favoriteMovies]);
	const active = (isActive) => {
		return isActive ? `text-primary` : `text-white`;
	};
	return (
		<Navbar bg="dark" data-bs-theme="dark" className="mb-4">
			<Container>
				<div className="d-flex w-100 justify-content-between">
					<Navbar.Brand className="d-flex align-items-center">
						<RiMovie2Line className="text-primary fs-3 me-2" />
						<span>Movie Night</span>
					</Navbar.Brand>
					<nav className="d-flex w-50 align-items-center justify-content-end">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									`text-decoration-none  ${active(isActive)}`
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/favorites"
								className={({ isActive }) =>
									`text-decoration-none  ${active(isActive)}`
								}
							>
								Favorites
							</NavLink>
						</li>

						{/* <li>
							<NavLink
								to="/todos"
								className={({ isActive }) =>
									`text-decoration-none  ${active(isActive)}`
								}
							>
								Todos
							</NavLink>
						</li> */}
						<li>
							<NavLink
								to="/login"
								className={({ isActive }) =>
									`text-decoration-none  ${active(isActive)}`
								}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) =>
									`text-decoration-none  ${active(isActive)}`
								}
							>
								Register
							</NavLink>
						</li>
						{favoriteMovies.length > 0 ? (
							<li className="text-white ms-3 d-flex align-items-center justify-content-between">
								<FaStar
									style={{
										color: "yellow",
									}}
								/>
								<span>{favoriteMovies.length}</span>
							</li>
						) : (
							<></>
						)}
					</nav>
				</div>
			</Container>
		</Navbar>
	);
}
