import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageOrderAdmin from './ManageOrderAdmin';



const ManageOrdersAdmin = () => {

    const [deletingProducts, setDeletingProducts] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }




    return (
        <div className='my-10 container'>
            <h2>Total Products: {products.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageOrderAdmin
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProducts={setDeletingProducts}
                            ></ManageOrderAdmin>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProducts && <DeleteConfirmModal
                deletingProducts={deletingProducts}
                refetch={refetch}
                setDeletingProducts={setDeletingProducts}
            ></DeleteConfirmModal>}

        </div>
    );
};

export default ManageOrdersAdmin;