import React from 'react';

const ListItem = ({item}) => {
    return (
        <div>
                <label>
                    <input type="checkbox" className="delete-checkbox"/>
                </label>
                <div>{item.SKU}</div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.type}</div>
                <div>{item.unique}</div>
        </div>
    );
};

export default ListItem;