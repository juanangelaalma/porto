import React, { useState } from "react";

import TextEditor from "../../components/TextEditor";
import Navbar from "../../components/Navbar";

import "../../styles/post-create.css";

const CreatePost = () => {
  const [content, setContent] = useState({
    title: "",
    thumbnail: "",
    body: "",
  });

  const handleSubmit = () => {
    
  }
  return (
    <div className="container-fluid p-0">
      <Navbar menu={false}>
        <li className="nav-item py-3 pr-2">
          <button className="btn btn-publish">Draft</button>
        </li>
        <li className="nav-item py-3 pr-5">
          <button className="btn btn-publish">Publish</button>
        </li>
      </Navbar>
      <div className="row justify-content-center">
        <div className="col-md-6 text-white mt-5">
          <p>
            <span onInput={(e) => setContent({ ...content, title: e.target.innerHTML })} class="textarea-auto-grow" role="textbox" contentEditable></span>
          </p>
          <TextEditor content={content} setContent={setContent} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
