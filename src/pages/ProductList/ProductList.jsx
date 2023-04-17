import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";
import { getData, deleteData } from "../../utils/api.js";


function ProductList() {

    const [formData, setFormData] = useState([]);
    const [selectedSkus, setSelectedSkus] = useState([]);
    const [deleteStatus, setDeleteStatus] = useState(false);

    useEffect(() => {
        console.log('loading')
        setDeleteStatus(false)
        getData(setFormData);

    }, [deleteStatus])

    const handleDelete = () => {
        const itemsToDelete = formData.filter(item => selectedSkus.includes(item.sku))
        itemsToDelete.forEach(
            item => deleteData(item.id, setDeleteStatus)
        );
        setDeleteStatus(false)
    }

    return (
        <>
            <div>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button onClick={handleDelete}  className="delete-checkbox">MASS DELETE</button>
                </div>
                <div>
                    {formData?.map((item) =>
                        <ListItem
                            key={item.sku}
                            item={item}
                            selectedSkus={selectedSkus}
                            setSelectedSkus={setSelectedSkus}
                        />
                    )}
                </div>
            </div>

        </>


    );
}

export default ProductList;