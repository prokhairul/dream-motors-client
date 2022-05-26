import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ManageProductAdmin from './ManageProductAdmin';



const ManageProductsAdmin = () => {

    const [deletingProducts, setDeletingProducts] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('https://gentle-hamlet-26508.herokuapp.com/product', {

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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductAdmin
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProducts={setDeletingProducts}
                            ></ManageProductAdmin>)
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

export default ManageProductsAdmin;