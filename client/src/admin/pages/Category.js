import React, { useEffect, useState } from "react";
import { createCategory, deleteCategory, getAllCategories } from "../../services/category.service";
import CategoryList from "../components/CategoryList";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import Title from "../components/Title";

import "../styles/category.css";

const Category = ({ isOpenSidebar, setIsOpenSidebar }) => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const getCategories = async () => {
    try {
      const res = await getAllCategories();
      const { data } = res;
      setCategories(data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteCategory = async (e, id) => {
    e.preventDefault()
    try {
      const response = await deleteCategory(id)
      console.log(response.data)
      getCategories()
    }catch(err) {
      console.log(err)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = { name: newCategory }
    
    try {
      const response = await createCategory(newData)
      console.log(response.data)
      setNewCategory("")
      getCategories()
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="admin category container-fluid p-0 d-flex justify-content-end">
      <SideBar isOpenSidebar={isOpenSidebar} />
      <RightBar
        setIsOpenSidebar={setIsOpenSidebar}
        isOpenSidebar={isOpenSidebar}
      >
        <div className="row">
          <div className="col-12 mb-4">
            <Title>Category</Title>
          </div>
          <div className="category-list col-md-6 col-12 p-0 d-flex">
            <ul className="p-0 px-3 w-100">
              {categories.map((category) => (
                <CategoryList
                  idCategory={category._id}
                  handleDeleteCategory={handleDeleteCategory}
                  name={category.name}
                />
              ))}
            </ul>
          </div>
          <div className="col-md-6 col-12 form">
            <form className="form-category" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">New Category</label>
                <input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter category name"
                />
              </div>
              <button type="submit" className="btn btn-green">
                Add
              </button>
            </form>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default Category;
