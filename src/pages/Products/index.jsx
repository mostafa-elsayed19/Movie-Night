import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import {
	addFavoriteMovie,
	removeFavoriteMovie,
} from "../../store/slices/Favorites";
import { FaStar, FaRegStar } from "react-icons/fa";
import { productsAction } from "../../store/slices/Movies";

export default function Products() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// let [movies, setMovies] = useState([]);
	let movies = useSelector((state) => state.movies.movies);
	let [pageNum, setPageNum] = useState(1);
	let [baseUrl, setBaseUrl] = useState("");
	let [posterSize, setPosterSize] = useState("");
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	useEffect(() => {
		dispatch(productsAction(pageNum));
		axios
			.get(
				"https://api.themoviedb.org/3/configuration?api_key=5cbc6bbb6520dd65aea036176b0e937c"
			)
			.then((res) => {
				setBaseUrl(res.data.images.base_url);
				setPosterSize(res.data.images.poster_sizes[4]);
			})
			.catch((err) => console.log(err));
	}, [dispatch, pageNum]);

	const handleNavigation = (id) => {
		navigate(`/moviedetails/${id}`);
	};

	// Get a copy of the favorites ids and return it to the FavoriteMovies
	const favorites = useSelector((state) => state.favorites.favoriteMovies);
	useEffect(() => {
		setFavoriteMovies(favorites.map((favMovie) => favMovie.id));
	}, [favorites]);

	// Check on the favoriteMovies to see if the movie has already been added to the favorites or not and then add it to the favorites
	const handleFavorite = (movie) => {
		const isAlreadyFavorite = favorites.some(
			(favMovie) => favMovie.id === movie.id
		);
		if (!isAlreadyFavorite) {
			dispatch(addFavoriteMovie(movie));
		} else {
			dispatch(removeFavoriteMovie(movie.id));
		}
	};
	return (
		<div className="container">
			<Row xs={1} md={2} lg={4} className="g-4">
				{movies.map((movie) => {
					const isFavorited = favoriteMovies.includes(movie.id);
					return (
						<Col key={movie.id}>
							<Card
								style={{ minHeight: "550px" }}
								className="position-relative"
							>
								<span
									style={{
										cursor: "pointer",
									}}
									className="fs-4 position-absolute top-0 end-0 pe-2"
									onClick={() => {
										handleFavorite(movie);
									}}
								>
									{isFavorited ? (
										<FaStar
											style={{
												color: "yellow",
											}}
										/>
									) : (
										<FaRegStar
											style={{
												color: "grey",
											}}
										/>
									)}
								</span>
								<Card.Img
									variant="top"
									style={{ maxHeight: "280px" }}
									// src={
									//     "http://image.tmdb.org/t/p/w500/" +
									//     movie.poster_path
									// }
									src={`${baseUrl}${posterSize}${movie.poster_path}`}
								/>
								<Card.Body>
									<Card.Title className="fs-6">
										{movie.title}
									</Card.Title>
									<Card.Text
										style={{
											height: "120px",
											overflow: "hidden",
										}}
									>
										{movie.overview}
									</Card.Text>
								</Card.Body>
								<div className="text-center mb-3">
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => {
											handleNavigation(movie.id);
										}}
									>
										Details
									</button>
								</div>
							</Card>
						</Col>
					);
				})}
			</Row>
			<div className="d-flex justify-content-evenly w-100 my-5">
				<button
					type="button"
					className="btn btn-secondary"
					onClick={() => {
						if (pageNum > 1) {
							setPageNum(pageNum - 1);
						}
						return;
					}}
				>
					Previous
				</button>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => {
						if (pageNum < 5) {
							setPageNum(pageNum + 1);
						}
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
}
