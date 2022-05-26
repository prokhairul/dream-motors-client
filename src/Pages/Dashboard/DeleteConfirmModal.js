import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProducts, refetch, setDeletingProducts }) => {
    const { name, email } = deletingProducts;
    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProducts(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete "{name}" This Product?</h3>
                    <p class="py-4">Once You confirm delete, You can't undone!!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-sm btn-accent">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-sm ">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;