import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const handleOnClick = (event) => {
    event.preventDefault()
    setSelectedCategory(event.target.innerHTML)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
          <button 
            className={selectedCategory === category ? "selected" : ""}
            key={index}
            onClick={handleOnClick}
          >
            {category}
            </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
