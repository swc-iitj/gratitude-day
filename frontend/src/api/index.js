import axios from "axios";

export const BACKEND = "http://devluplabs.centralindia.cloudapp.azure.com";

const instance = axios.create({
	baseURL: `${BACKEND}/api`,
});

export default instance;
