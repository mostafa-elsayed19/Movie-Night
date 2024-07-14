import { NavLink } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="container">
			<div className="row text-center my-5">
				<div className="col-md-12">
					<div className="error-template">
						<h1>Oops!</h1>
						<h2>404 Not Found</h2>
						<div className="error-details">
							Sorry, an error has occured, Requested page not
							found!
						</div>
						<div className="error-actions">
							<NavLink to="/" className="btn btn-primary btn-lg">
								Take Me Home
							</NavLink>
							<a
								href="http://www.jquery2dotnet.com"
								className="btn btn-default btn-lg"
							>
								<span className="glyphicon glyphicon-envelope" />{" "}
								Contact Support
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
