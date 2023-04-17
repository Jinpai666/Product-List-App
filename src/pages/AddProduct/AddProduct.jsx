import React, {useEffect, useRef, useState} from "react";
import "./AddProduct.scss";
import {Link, useNavigate} from "react-router-dom";
import {getData, sendData} from "../../utils/api.js";

function AddProduct() {
    const [type, setType] = useState("furniture");
    const [items, setItems] = useState([]);
    const [isFurniture, setIsFurniture] = useState(true);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    const skuRef = useRef(null);
    const nameRef = useRef(null);
    const priceRef = useRef(null);
    const typeRef = useRef(null);
    const uniqueRef = useRef(null);
    const heightRef = useRef(null);
    const widthRef = useRef(null);
    const lengthRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        getData()
            .then((data) => {
                setItems(data);
                setPending(false);
            })
            .catch(() => {
                setError("Failed to load products. Please try again later.");
                setPending(false);
            });
    }, []);

    const handleTypeChange = (e) => {
        setType(e.target.value);
        setIsFurniture(e.target.value === "furniture");
    };

    const handleSave = (e) => {
        e.preventDefault();

        const existingSkus = items.map((item) => item.sku);
        const currentSku = skuRef.current.value;

        if (!existingSkus.includes(currentSku)) {
            const newItem = {
                sku: currentSku,
                name: nameRef.current.value,
                price: priceRef.current.value,
                unique: isFurniture
                    ? `${heightRef.current.value}x${widthRef.current.value}x${lengthRef.current.value}`
                    : uniqueRef.current.value,
                type: typeRef.current.value,
            };

            setPending(true);
            sendData(newItem).then(() => navigate("/"));
        }
    };

    return (
        <>
            <form id="product_form">
                <Link to="/">Cancel</Link>
                <button onClick={handleSave}>{pending ? "Saving" : "Save"}</button>

                <label>
                    SKU
                    <input id="sku" name="SKU" type="text" maxLength={8} ref={skuRef}/>
                </label>

                <label>
                    Name
                    <input id="name" name="name" type="text" ref={nameRef}/>
                </label>

                <label>
                    Price
                    <input id="price" name="price" type="text" ref={priceRef}/>
                </label>

                {isFurniture && (
                    <div>
                        Dimensions
                        <label>
                            Height
                            <input id="height" name="height" type="text" ref={heightRef}/>
                        </label>
                        <label>
                            Width
                            <input id="width" name="width" type="text" ref={widthRef}/>
                        </label>
                        <label>
                            Length
                            <input id="length" name="length" type="text" ref={lengthRef}/>
                        </label>
                    </div>
                )}

                {!isFurniture && (
                    <label>
                        {type === "book" ? "Weight" : "Size"}
                        <input id="unique" name="unique" type="text" ref={uniqueRef}/>
                    </label>
                )}

                <label>
                    Type Switcher
                    <select
                        id="productType"
                        name="type"
                        ref={typeRef}
                        value={type}
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