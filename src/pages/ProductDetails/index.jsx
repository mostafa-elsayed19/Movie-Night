// import { useContext } from "react";
// import { languageContext } from "../../contexts/language";
import { Card, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
	const movie = useLoaderData();
	// const { language } = useContext(languageContext);
	return (
		<div className="container">
			{/* <h1>Language is {language}</h1> */}
			<Row xs={1} className="g-4">
				<Col key={movie.id}>
					<Card className="w-75 mx-auto">
						<Row xs={1} md={2}>
							<Col>
								<Card.Img
									variant="top"
									src={
										"http://image.tmdb.org/t/p/original/" +
										movie.poster_path
									}
								/>
							</Col>
							<Col>
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<Card.Text>
										{movie.overview} Lorem ipsum dolor sit
										amet consectetur adipisicing elit.
										Explicabo libero, excepturi quis sint
										quo vero ea rem velit ipsum soluta totam
										blanditiis maiores
									</Card.Text>
									<Card.Text>
										{movie.tagline} Lorem ipsum dolor sit
										amet consectetur adipisicing elit.
										Explicabo libero, excepturi quis sint
										quo vero ea rem velit ipsum soluta totam
										blanditiis maiores
									</Card.Text>
								</Card.Body>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
