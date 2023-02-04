import React from 'react';
import './AddProduct.scss'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getData, getFormData} from "../../utils/api.js";
import axios from "axios";


function AddProduct(props) {
    let itemsFromStorage = window.localStorage.getItem('list') ? (JSON.parse(window.localStorage.getItem('list'))) : [];
    const [type,setType] = useState('furniture')
    const [formData, setFormData] = useState({})

// fetch('https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e').then(response => setFormData(response))

    const sendFormData = () => {
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("PUT", "https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$3lRbwOeHk95tiwAdCDDHq.uhtryglyvS/LD1S8BfLPgWWn.AqldMa");
        req.send('{"sample": "Hello World"}');
    }


useEffect(()=>{
   setFormData(getData())
},[])
    const navigate = useNavigate();

    const collectData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        e.target.name === 'type' ? setType(e.target.value) : null;
    }

    const handleSave = (e) => {
        e.preventDefault()
        const newItem =  [...itemsFromStorage, formData];
        //could be api request to database
        window.localStorage.setItem('list', JSON.stringify(newItem))
        navigate("/")
    }

    return (
        <>
            <button onClick={()=>console.log(formData)}>test</button>
            <form>
                <Link to="/">Cancel</Link>
                <button onClick={handleSave}>save</button>

                <label>
                    SKU
                    <input
                        name={'SKU'}
                        type="text"
                        onChange={collectData}
                        maxLength={8}
                    />
                </label>

                <label>
                    Name
                    <input
                        name={'name'}
                        type="text"
                        onChange={collectData}
                    />
                </label>

                <label>
                    Price
                    <input
                        name={'price'}
                        type="text"
                        onChange={collectData}
                    />
                </label>

                { type === 'furniture' && <label>
                    Dimensions
                    <input
                        name='dimensions'
                        type="text"
                        onChange={collectData}
                    />
                </label> }

                { type === 'book' && <label>
                    Weight
                    <input
                        name='weight'
                        type="text"
                        onChange={collectData}
                    />
                </label> }

                { type === 'dvd' && <label>
                    Size
                    <input
                        name='size'
                        type="text"
                        onChange={collectData}
                    />
                </label> }

                <label>
                    Type Switcher
                    <select
                        name={'type'}
                        onChange={collectData}>
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