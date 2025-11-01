import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Container from '../components/Container';

const MyBids = () => {
    const { user } = use(AuthContext)
    const [myBids, setMyBids] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyBids(data)
                })
        }
    }, [user?.email])
    return (
        <Container>
            <div>
            <h2 className='font-bold text-2xl md:text-4xl mt-18 mb-5'>My Bids :  
                 <span className='text-primary px-2'>
                 {myBids.length}</span>
            </h2>

            {/* my bids display  */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product Info</th>
                                <th>Seller Info</th>
                                <th>Bid Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {myBids.map((bid, index) =>

                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className=" h-20 w-36">
                                                    <img className='w-full rounded-md object-fill'
                                                        src={bid?.image}
                                                        alt={bid.title} />
                                                </div>
                                            </div>
                                            <div className='space-y-2'>
                                                <div className="font-bold text-lg">{bid.title}</div>
                                                <div className="text-sm opacity-50">
                                                    $ {bid.price_min} - {bid.price_max}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* seller info  */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className=" h-12 w-12">
                                                    <img className='w-full rounded-full'
                                                        src={bid?.seller_image}
                                                        alt={bid.seller_name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{bid.seller_name}</div>
                                                <div className="text-sm opacity-50">
                                                    {bid.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{bid.offeredPrice}</td>
                                    <th>
                                        <button
                                            className="btn bg-white border
                                             border-red-500 text-red-500">
                                            Remove Bid</button>
                                    </th>
                                </tr>
                                {/* row 2 */}

                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default MyBids;