import axios from "axios";

import { API_URL } from "../constants";

const uploadImage = (formData) =>
  axios.post(API_URL + "/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export { uploadImage };
