import React, {useEffect, useRef, useState} from "react";
import "./AddProduct.scss"
import {Link, useNavigate} from "react-router-dom";
import {getData, sendData} from "../../utils/api.js";


function AddProduct() {


    const [type, setType] = useState("furniture");
    const [formData, setFormData] = useState({});
    const [isFurniture, setIsFurniture] = useState(true);
    const [pending, setPending] = useState(false);

    const skuRef = useRef("");
    const nameRef = useRef("");
    const priceRef = useRef("");
    const typeRef = useRef("");
    const uniqueRef = useRef("");
    const heightRef = useRef("");
    const widthRef = useRef("");
    const lengthRef = useRef("");


    const navigate = useNavigate();

    useEffect(() => {
        getData(setFormData);
    }, [])


    const handleTypeChange = (e) => {
        const target = e.target.value
        setType(target);
        target === 'furniture'
            ? setIsFurniture(true)
            : setIsFurniture(false)
    }
    const handleSave = (e) => {
        let newItem;
        e.preventDefault()
        isFurniture
            ? newItem =  {
                SKU: skuRef.current.value,
                name: nameRef.current.value,
                price: priceRef.current.value,
                unique: `${heightRef.current.value}x${widthRef.current.value}x${lengthRef.current.value}`,
                type: typeRef.current.value,
            }
            : newItem =  {
                SKU: skuRef.current.value,
                name: nameRef.current.value,
                price: priceRef.current.value,
                unique: uniqueRef.current.value,
                type: typeRef.current.value,
            };
        const newList = [...formData, newItem];
        setPending(true)
        sendData(newList).then(() =>  navigate("/"));

    }

    return (
        <>
            <button onClick={() => console.log(formData)}>test</button>
            <form id="product_form">
                <Link to="/">Cancel</Link>
                <button onClick={handleSave}>{pending ? 'saving' : 'save'}</button>

                <label>
                    SKU
                    <input
                        id="sku"
                        name="SKU"
                        type="text"
                        maxLength={8}
                        ref={skuRef}
                    />
                </label>

                <label>
                    Name
                    <input
                        id="name"
                        name="name"
                        type="text"
                        ref={nameRef}
                    />
                </label>

                <label>
                    Price
                    <input
                        id="price"
                        name="price"
                        type="text"
                        ref={priceRef}
                    />
                </label>

                {type === "furniture" && <div>
                    Dimensions
                    <label>
                        Height
                        <input
                            id="height"
                            name="dimensions"
                            type="text"
                            ref={heightRef}
                        />
                    </label>
                    <label>
                        Width
                        <input
                            id="width"
                            name="dimensions"
                            type="text"
                            ref={widthRef}
                        />
                    </label>
                    <label>
                        Length
                        <input
                            id="length"
                            name="dimensions"
                            type="text"
                            ref={lengthRef}
                        />
                    </label>

                </div>}

                {type === "book" && <label>
                    Weight
                    <input
                        id="weight"
                        name="weight"
                        type="text"
                        ref={uniqueRef}
                    />
                </label>}

                {type === "dvd" && <label>
                    Size
                    <input
                        id="size"
                        name="size"
                        type="text"
                        ref={uniqueRef}

                    />
                </label>}

                <label>
                    Type Switcher
                    <select
                        id="productType"
                        name="type"
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