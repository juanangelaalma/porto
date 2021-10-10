import React, { useState } from "react";

const dummy = [
  {
    _id: "1",
    name: "web",
  },
  {
    _id: "2",
    name: "android",
  },
  {
    _id: "3",
    name: "database",
  },
];

const Category = ({ idCategory, setIdCategory }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    setIdCategory(id);
  };

  return (
    <section className="category row py-5 px-2">
      <ul class="list-group d-flex w-100 flex-row category-list">
        <li class="flex-1 category-item mx-2">
          <a
            href=""
            onClick={(e) => handleClick(e, "0")}
            className={`text-gray${idCategory == "" ? " active" : ""}`}
          >
            All
          </a>
        </li>
        {dummy.map((dum) => {
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
