import React, { useState } from "react";

const Category = ({ idCategory, setIdCategory, categories }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    setIdCategory(id);
  };

  console.log("id category: " + idCategory)
  return (
    <section className="category row py-5 px-2">
      <ul class="list-group d-flex w-100 flex-row category-list">
        <li class="flex-1 category-item mx-2">
          <a
            href=""
            onClick={(e) => handleClick(e, "")}
            className={`text-gray${idCategory == "" ? " active" : ""}`}
          >
            All
          </a>
        </li>
        {categories.map((dum) => {
          return (
            <li class="flex-1 category-item mx-2">
              <a
                href=""
                onClick={(e) => handleClick(e, dum._id)}
                className={`text-gray${idCategory == dum._id ? " active" : ""}`}
              >
                {dum.name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Category;
