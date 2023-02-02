import React from 'react';

const ListItem = ({item}) => {
    console.log('item',item)
    return (
        <div>
            {item}
        </div>
    );
};

export default ListItem;