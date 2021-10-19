import axios from "axios";
import { API_URL } from "../constants";
import authHeader from "./auth.header";

const getAllPosts = () => axios.get(API_URL + "/posts")

const addPost = (post) => axios.post(API_URL + "/posts", post, { headers: authHeader() })

const getPostsBySlug = (slug) => axios.get(API_URL + "/posts/" + slug)

const deletePostBySlug = (slug) => axios.delete(API_URL + "/posts/" + slug, { headers: authHeader() })

export { getAllPosts, addPost, getPostsBySlug, deletePostBySlug }