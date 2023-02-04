import React, {useEffect, useState} from 'react';
import './ProductList.scss'
import {Link} from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";


function ProductList(props) {
     const [listItems, setListItems] = useState([]) ;

    useEffect(()=>{
        window.localStorage.getItem('list') && setListItems (JSON.parse(window.localStorage.getItem('list')));
        console.log('zmieniam')
    },[]);

    return (
        <>
            <div>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button id="delete-product-btn">MASS DELETE</button>
                </div>
                <div>
                    { listItems?.map((item, idx)=>
                        <ListItem key={idx} item={item.name}/>
                    )}
                </div>
            </div>

        </>

    );
}

export default ProductList;