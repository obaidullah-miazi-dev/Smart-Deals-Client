import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const Home = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/latestProducts')
                const data = await res.json()
                setProducts(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
   console.log(products);

   if(loading) return <div>Loading....</div>
   if(error) return alert(error)

    return (
        <div>
            home
            <Banner />
        </div>
    );
};

export default Home;