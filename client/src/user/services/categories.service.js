import axios from "axios";
import { API_URL } from "../../constants";

const getCategories = () => axios.get(API_URL + "/categories")

export { getCategories }