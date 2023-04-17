import axios from "axios";

export const getData = async (setItems) => {
    try {
        const { data } = await axios.get(
            'https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json'
        );
        if (!data) {
            console.log('no products');
            setItems([]);
            return;
        }
        const items = Object.keys(data).map((itemId) => ({
            id: itemId,
            ...data[itemId],
        }));
        setItems(items);
    } catch (error) {
        setItems([]);
        console.log(error);
    }
}


export const sendData = async (list) => {
    try {
        await axios.post(
            'https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json',
            list,
        )
    } catch (error) {
        console.log(error)
    }
}

export const deleteData = async (item, setReload) => {
    try {
        await axios.delete(
            `https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list/${item}.json`
        );
        setReload(false);
    } catch (error) {
        console.log(error);
    }
}