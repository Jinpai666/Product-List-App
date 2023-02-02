import React from 'react';
import './AddProduct.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function AddProduct(props) {
    const [listItems, setListItems] = useState([]) ;

    useEffect(()=>{
        window.localStorage.getItem('list') && setListItems (JSON.parse(window.localStorage.getItem('list')));
        console.log('zmieniam')
    },[]);
    return (
        <>
            <Link to="/">Cancel</Link>
            <button>save</button>
            <form>
                <label>
                    SKU
                    <input type="text"/>
                </label>

                <label>
                    Name
                    <input type="text"/>
                </label>

                <label>
                    Price
                    <input type="text"/>
                </label>

                <label>
                    Name
                    <input type="text"/>
                </label>

            </form>
        </>
    );
}

export default AddProduct; 