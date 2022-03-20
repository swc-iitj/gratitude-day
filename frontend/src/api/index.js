import axios from "axios";

export const BACKEND = "https://swc.prometeo.in";

const instance = axios.create({
	baseURL: `${BACKEND}/api`,
});

export default instance;
