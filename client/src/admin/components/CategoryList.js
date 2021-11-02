import React, { useEffect, useRef, useState } from "react";
import InputNameCategory from "./InputNameCategory";

const CategoryList = ({ idCategory, handleDeleteCategory, name }) => {
  const [editCategory, setEditCategory] = useState(false);
  const [categoryName, setCategoryName] = useState(name);

  const buttonEdit = useRef();

  const handleEditCategory = () => {
    setEditCategory(!editCategory);
  };

  return (
    <li className="d-flex w-100 justify-content-between px-3">
      {editCategory ? (
        <InputNameCategory
          categoryName={categoryName}
          setCategoryName={setCategoryName}
        />
      ) : (
        <p>{name}</p>
      )}
      <div className="action">
        <button ref={buttonEdit} className="btn btn-sm btn-info mr-2">
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={(e) => handleDeleteCategory(e, idCategory)} className="btn btn-sm btn-danger">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default CategoryList;
