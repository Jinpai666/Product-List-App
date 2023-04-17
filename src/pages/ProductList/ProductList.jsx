import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import ListItem from "../../components/ListItem.jsx";
import { getData, deleteData } from "../../utils/api.js";

function ProductList() {
    const [items, setItems] = useState([]);
    const [selectedSkus, setSelectedSkus] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getData()
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            })
            .catch(() => {
                setError("Failed to load products. Please try again later.");
                setIsLoading(false);
            });
    }, []);

    const handleDelete = async () => {
        setIsLoading(true);
        const itemsToDelete = items.filter((item) =>
            selectedSkus.includes(item.sku)
        );
        try {
            await Promise.all(
                itemsToDelete.map((item) => deleteData(item.id))
            );
            setItems((prevItems) =>
                prevItems.filter((item) => !itemsToDelete.includes(item))
            );
            setSelectedSkus([]);
            setError("");
        } catch (error) {
            setError("Failed to delete products. Please try again later.");
        }
        setIsLoading(false);
    };

    return (
        <>
            <div>
                <h2>test: {isLoading ? "loading" : "loaded"}</h2>
                <h1>Product List</h1>
                <div>
                    <Link to="/add-product">ADD</Link>
                    <button onClick={handleDelete} className="delete-checkbox">
                        MASS DELETE
                    </button>
                </div>
                {error && (
                    <p style={{ color: "red" }}>{error}</p>
                )}
                {items.length > 0 ? (
                    <div>
                        {items.map((item) => (
                            <ListItem
                                key={item.sku}
                                item={item}
                                selectedSkus={selectedSkus}
                                setSelectedSkus={setSelectedSkus}
                            />
                        ))}
                    </div>
                ) : (
                    <p>No products to display.</p>
                )}
            </div>
        </>
    );
}

export default ProductList;
