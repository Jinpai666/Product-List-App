import React, {useEffect, useRef, useState} from 'react';
import './AddProduct.scss'
import {Link, useNavigate} from "react-router-dom";
import {getData, sendData} from "../../utils/api.js";


function AddProduct() {

    const [type, setType] = useState('furniture');
    const [formData, setFormData] = useState({});

    const skuRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    const typeRef = useRef('');
    const uniqueRef = useRef('');

    const navigate = useNavigate();

    useEffect(() => {
        getData(setFormData);
    }, [])


    const handleTypeChange = (e) => {
        setType(e.target.value);
    }
    const handleSave = (e) => {
        e.preventDefault()
        const newList = [...formData, {
            SKU: skuRef.current.value,
            name: nameRef.current.value,
            price: priceRef.current.value,
            unique: uniqueRef.current.value,
            type: typeRef.current.value,
        }];
        sendData(newList)
        navigate("/")
    }

    return (
        <>
            <form>
                <Link to="/">Cancel</Link>
                <button onClick={handleSave}>save</button>

                <label>
                    SKU
                    <input
                        name={'SKU'}
                        type="text"
                        maxLength={8}
                        ref={skuRef}
                    />
                </label>

                <label>
                    Name
                    <input
                        name={'name'}
                        type="text"
                        ref={nameRef}
                    />
                </label>

                <label>
                    Price
                    <input
                        name={'price'}
                        type="text"
                        ref={priceRef}
                    />
                </label>

                {type === 'furniture' && <label>
                    Dimensions
                    <input
                        name='dimensions'
                        type="text"
                        ref={uniqueRef}
                    />
                </label>}

                {type === 'book' && <label>
                    Weight
                    <input
                        name='weight'
                        type="text"
                        ref={uniqueRef}

                    />
                </label>}

                {type === 'dvd' && <label>
                    Size
                    <input
                        name='size'
                        type="text"
                        ref={uniqueRef}

                    />
                </label>}

                <label>
                    Type Switcher
                    <select
                        name={'type'}
                        ref={typeRef}
                        onChange={handleTypeChange}
                    >
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