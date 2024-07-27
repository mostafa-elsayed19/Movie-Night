import axiosInstance from "../axios";

export const getMovieById = async ({ params: { id } }) => {
	const response = await axiosInstance.get(`${id}`);
	return response.data;
};
