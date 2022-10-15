import React from "react";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>Cost: {product.price}</p>
      <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
