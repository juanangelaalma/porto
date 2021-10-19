import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPostsBySlug } from "../../../services/post.service";
import TextEditor from "../../components/TextEditor";
import Navbar from "../../components/Navbar";

import { getAllCategories } from "../../../services/category.service";
import { addPost } from "../../../services/post.service";
import { setMessage } from "../../../actions/message";
import { notifySuccess } from "../../../common/toast";
import { ToastContainer } from "react-toastify";

const EditPost = () => {
  const { status, slug } = useParams();
  const [post, setPost] = useState({});

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState("");

  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  console.log(post)


  const getBySlug = async (slug) => {
    try {
      const res = await getPostsBySlug(slug);
      const { data } = res;
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    const response = await getAllCategories();
    const { data } = response;
    setSelectedCategory(data.categories[0]._id);
    setCategories(data.categories);
  };

  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagsChange = (e) => {
    setSelectedTags(e.target.value);
  };

  const handleSubmit = (e) => {
    // const currentStatus = e.target.getAttribute("status");
    // const currentCategory = categories.filter(
    //   (category) => category._id === selectedCategory
    // );
    // const newPost = {
    //   ...content,
    //   category: { ...currentCategory[0] },
    //   tags: selectedTags.split(","),
    //   status: currentStatus,
    // };
    // addPost(newPost)
    //   .then((res) => {
    //     dispatch(setMessage(currentStatus + " successfully"))
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getBySlug(slug);
  }, []);

  useEffect(() => {
    if (message) {
      notifySuccess(message.message);
    }
  }, [message])

  return (
    <div className="container-fluid p-0 create-post">
      <Navbar menu={false}>
        <li className="nav-item py-3 pr-2">
          <button
            status="drafted"
            onClick={handleSubmit}
            className="btn btn-publish"
          >
            Draft
          </button>
        </li>
        <li className="nav-item py-3 pr-5">
          <button
            status="published"
            onClick={handleSubmit}
            className="btn btn-publish"
          >
            Publish
          </button>
        </li>
      </Navbar>
      <div className="row justify-content-start">
        <div className="col-md-3 d-flex align-items-center">
          <div className="card p-4">
            <div className="form-group">
              <label htmlFor="category">Select Category</label>
              <select
                value={selectedCategory}
                onChange={handleSelectChange}
                class="form-control"
                id="category"
              >
                {categories.map((cat) => {
                  return (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="category">Select Tags</label>
              <input
                value={selectedTags}
                onChange={handleTagsChange}
                type="text"
                id="category"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 ml-3 text-white mt-5">
          <p>
            <span
              onInput={(e) =>
                setPost({ ...post, title: e.target.innerHTML })
              }
              class="textarea-auto-grow"
              role="textbox"
              contentEditable
            ></span>
          </p>
          <TextEditor content={post} setContent={setPost} />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EditPost;
