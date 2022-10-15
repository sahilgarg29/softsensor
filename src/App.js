import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [cart, setCart] = useState([]);

  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log(page + 1);
        setPage((prev) => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  });

  function handleAddToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData((prev) => [...prev, ...res.data]);
    });
  }, [page]);

  return (
    <div className="App">
      <h1>Fresh Stock</h1>
      <div className="productsContainer">
        {data.map((product, i) => {
          if (data.length === i + 1) {
            return (
              <div ref={lastElementRef}>
                <ProductCard
                  product={product}
                  key={i}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            );
          } else {
            return (
              <ProductCard
                product={product}
                key={i}
                handleAddToCart={handleAddToCart}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
