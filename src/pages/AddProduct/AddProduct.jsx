import React from 'react';
import './AddProduct.scss'
import {Link, useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";

function AddProduct(props) {
    let itemsFromStorage = (JSON.parse(window.localStorage.getItem('list')));
    console.log(itemsFromStorage)
    const [name, setName] = useState('')
    const [SKU, setSKU] = useState('')
    const [price, setPrice] = useState('')
    const [unique, setUnique] = useState('furniture')
    const [uniqueText, setUniqueText] = useState('Dimensions')

    const navigate = useNavigate();

    const handleSave = () => {
        let newItem;
        if (unique === 'furniture') {
            newItem = {
                SKU: SKU,
                name: name,
                price: price,
                type: unique,
                dimensions: 'dimensions'
            }
        }
        if (unique === 'dvd') {
            newItem = {
                SKU: SKU,
                name: name,
                price: price,
                type: unique,
                Size: 'Size'

            }
        }
        if (unique === 'book') {
            newItem = {
                SKU: SKU,
                name: name,
                price: price,
                type: unique,
                weight: 'weight'
            }
        }

        const newItemList =[...itemsFromStorage,newItem]
        window.localStorage.setItem('list', JSON.stringify(newItemList))

        navigate("/")



    }
    const handleChange = event => {
        setUnique(event.target.value);
        unique === 'furniture' && setUniqueText('Dimensions')
        unique === 'dvd' && setUniqueText('Size')
        unique === 'book' && setUniqueText('Weight')
    }
    return (
        <>
            <Link to="/">Cancel</Link>
            <button onClick={handleSave}>save</button>
            <form>
                <label>
                    SKU
                    <input
                        type="text"
                        onChange={event => {setSKU(event.target.value)}}
                    />
                </label>

                <label>
                    Name
                    <input
                        type="text"
                        onChange={event => {setName(event.target.value)}}
                    />
                </label>

                <label>
                    Price
                    <input
                        type="text"
                        onChange={event => {setPrice(event.target.value)}}
                    />
                </label>

                <label>
                    Type Switcher
                    <select onChange={handleChange}>
                        <option value="furniture">Furniture</option>
                        <option value="dvd">DVD</option>
                        <option value="book">Book</option>
                    </select>
                </label>

            </form>
        </>
    );
}

export default AddProduct; 