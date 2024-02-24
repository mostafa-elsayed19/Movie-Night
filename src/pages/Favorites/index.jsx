// import React from "react";

import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteMovie } from "../../store/slices/Favorites";

function Favorites() {
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  useEffect(() => {}, [favoriteMovies]);
  const dispatch = useDispatch();
  const handleDeleteFavorite = (movie) => {
    dispatch(removeFavoriteMovie(movie.id));
  };
  return (
    <div className="container">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {favoriteMovies.map((movie) => {
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
                    handleDeleteFavorite(movie);
                  }}
                >
                  <MdDelete
                    style={{
                      color: "red",
                    }}
                  />
                </span>
                <Card.Img
                  variant="top"
                  style={{ maxHeight: "280px" }}
                  src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{movie.title}</Card.Title>
                  <Card.Text
                    style={{
                      height: "120px",
                      overflow: "hidden",
                    }}
                  >
                    {movie.overview}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Favorites;
