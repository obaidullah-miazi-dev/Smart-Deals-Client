import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Container from '../components/Container';

const MyProducts = () => {
    const { user } = use(AuthContext)
    const [myProducts, setMyProducts] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`https://smart-deals-db-server.onrender.com/products?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyProducts(data)
                })
        }
    }, [user?.email])

    const handleDeleteproducts= (_id)=>{
        alert('are you sure to delete this products')
        fetch(`https://smart-deals-db-server.onrender.com/products/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log('after deleted',data);
            if(data.deletedCount){
                const remainingproductss = myProducts.filter(products => products._id !== _id)
                setMyProducts(remainingproductss)
            }
        })
    }
    return (
        <Container>
            <div>
            <h2 className='font-bold text-2xl md:text-4xl mt-18 mb-5'>My Products :  
                 <span className='text-primary px-2'>
                 {myProducts.length}</span>
            </h2>

            {/* my products display  */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Image</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {myProducts.map((products, index) =>

                            <tbody key={products._id}>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className=" h-20 w-36">
                                                    <img className='w-full rounded-md object-fill border border-gray-200 p-2'
                                                        src={products?.image}
                                                        alt={products.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Product name  */}
                                    <td className='font-bold text-lg'>
                                        {products.title}
                                    </td>


                                    <td>{products.category}</td>
                                    <td>$ {products.price_min} - {products.price_max}</td>
                                    <th>
                                        <button onClick={()=> handleDeleteproducts(products._id)}
                                            className="btn bg-white border
                                             border-red-500 text-red-500">
                                            Delete Product</button>
                                    </th>
                                </tr>
                                

                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default MyProducts;