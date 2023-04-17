import axios from "axios";

export async function getData(setItems) {
    try {
        await axios.get(
            'https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json'
        ).then(response => {
            if (!response.data) {
                console.log('no products')
                return;
            }
            console.log('obj',Object)
            const data = Object.keys(response.data).map(itemId => ({
                id: itemId,
                sku: response.data[itemId].sku,
                name: response.data[itemId].name,
                price: response.data[itemId].price,
                type: response.data[itemId].type,
                unique: response.data[itemId].unique,
            }))
            setItems(data)
        })
    } catch (error) {
        setItems([])
        console.log(error)
    }
}

export async function sendData(list) {
    try {
        await axios.post(
            'https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json',
            list,
        )
    } catch (error) {
        console.log(error)
    }
}

export async function deleteData(item, setReload){
    console.log(item)
    try {
        await axios.delete(
            `https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list/${item}.json`,
        );
       await setReload(true)
    } catch (error) {
        console.log(error)
    }
}