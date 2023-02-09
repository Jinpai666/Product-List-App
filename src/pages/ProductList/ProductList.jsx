import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";
import { getData, updateData } from "../../utils/api.js";


function ProductList() {

    const [formData, setFormData] = useState([]);
    const [selectedSkus, setSelectedSkus] = useState([])

    useEffect(() => {
        getData(setFormData);
    }, [])

    const handleDelete = () => {
        const newData = formData.filter(item => !selectedSkus.includes(item.sku))
        updateData(newData).then((error) => {
            error
                ? null
                : setFormData(newData)
        })
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