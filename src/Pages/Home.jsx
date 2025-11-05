import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import RecentProducts from "../components/RecentProducts";
import FancyLoader from "../components/FancyLoader";
import useAxios from "../Hooks/useAxios";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosInstance = useAxios()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance(
          "/latestProducts"
        );
        setProducts(res.data);
        // console.log(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosInstance]);
  // console.log(products);

  if (loading) return <FancyLoader></FancyLoader>;
  if (error) return console.log(error);

  return (
    <div>
      <Banner />

      <Container>
        <h2 className="font-bold text-center md:text-5xl text-3xl mt-8">
          Recent <span className="text-primary">Products</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-8 mt-10">
          {products.map((product) => (
            <RecentProducts
              key={product._id}
              product={product}
            ></RecentProducts>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
