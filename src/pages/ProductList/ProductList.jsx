import React, {useEffect, useState} from 'react';
import './ProductList.scss'
import {Link} from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";
import {getData} from "../../utils/api.js";


function ProductList(props) {
    const [listItems, setListItems] = useState([]);
    const [formData, setFormData] = useState([]);

    useEffect(() => {
        console.log('loading')
        getData(setFormData);


    }, [])
    return (
        <>
            <div>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button onClick={() => console.log(formData)} id="delete-product-btn">MASS DELETE</button>
                </div>
                <div>
                    {formData?.map((item, idx) =>
                        <ListItem key={idx} item={item}/>
                    )}
                </div>
            </div>

        </>


    );
}

export default ProductList;