import { useState, useEffect } from "react";
import { BASE_URL, PRODUCTS_ENDPOINT } from "../../../constants/api";
import useAxios from "../../../hooks/useAxios";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const http = useAxios();

  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await http.get(`${BASE_URL}${PRODUCTS_ENDPOINT}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getAllProducts();
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>an error happend</div>;

  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <h3>{product.description}</h3>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
}
