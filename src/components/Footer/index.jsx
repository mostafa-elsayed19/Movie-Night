// import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
	return (
		<Navbar
			bg="dark"
			data-bs-theme="dark"
			className=" py-3 mt-4 border-top"
		>
			<div className="container">
				<div className="d-flex w-100 flex-wrap justify-content-between align-items-center">
					<p className="col-md-4 mb-0 text-body-secondary">
						© 2023 Company, Inc
					</p>
					<Navbar.Brand className="d-flex align-items-center text-center">
						<RiMovie2Line className="text-primary fs-3 me-2" />
						<span>Movie Night</span>
					</Navbar.Brand>
					<nav className="d-flex w-50 align-items-center justify-content-end">
						<li>
							<NavLink
								to="/"
								className={`text-decoration-none text-white `}
							>
								Home
							</NavLink>
						</li>
						{/* <li>
                            <NavLink
                                to="/movies"
                                className={`text-decoration-none text-white `}
                            >
                                Movies
                            </NavLink>
                        </li> */}
						<li>
							<NavLink
								to="/favorites"
								className={`text-decoration-none text-white `}
							>
								Favorites
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								className={`text-decoration-none text-white `}
							>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register"
								className={`text-decoration-none text-white `}
							>
								Register
							</NavLink>
						</li>
					</nav>
				</div>
			</div>
		</Navbar>
	);
}
