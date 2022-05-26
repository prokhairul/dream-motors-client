import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ product, index, refetch, setDeletingProducts }) => {
    const { name, phone, img, email, quantity } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingProducts(product)} htmlFor="delete-confirm-modal" className="btn btn-sm btn-accent">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;