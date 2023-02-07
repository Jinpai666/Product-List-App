import React, { useRef } from 'react';

const ListItem = ({item, selectedSkus, setSelectedSkus}) => {
    const skuRef = useRef();
    const handleChange = (e) => {
        const clickedSku = skuRef.current.innerText.slice(5)
        if (e.target.checked){
            setSelectedSkus([...selectedSkus, clickedSku])
        }else{
            setSelectedSkus(selectedSkus.filter(item => item !== clickedSku))
        }

    }
    return (
        <div>
                <label>
                    <input onChange={handleChange} type="checkbox" className="delete-checkbox"/>
                </label>
                <div ref={skuRef}>SKU: {item.sku}</div>
                <div>Name: {item.name}</div>
                <div>Price: {item.price}</div>
                <div>Type: {item.type}</div>
                <div>Unique: {item.unique}</div>
        </div>
    );
};

export default ListItem;