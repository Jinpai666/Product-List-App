import React, { useEffect, useState } from 'react';
import './ProductList.scss'
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";
import { getData, deleteData } from "../../utils/api.js";


function ProductList() {

    const [formData, setFormData] = useState([]);
    const [selectedSkus, setSelectedSkus] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('loading')
        getData(setFormData).then(() => setIsLoading(false));

    }, [isLoading])

    const handleDelete = () => {
        setIsLoading(true)
        const itemsToDelete = formData.filter(item => selectedSkus.includes(item.sku))
        itemsToDelete.forEach(
            item => deleteData(item.id, setIsLoading)
        );
    }

    return (
        <>
            <div>
                <h2>test : {isLoading ? 'loading' : 'loaded'}</h2>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button onClick={handleDelete}  className="delete-checkbox">MASS DELETE</button>
                </div>
                {formData.length > 0 ? (
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
                ) : (
                    <p>No products to display.</p>
                )}
            </div>
        </>
    );
}

export default ProductList;
