import React from 'react';
import { useState } from 'react';

const Category_87 = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button key={index} type="button" className="filter-btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category_87;
