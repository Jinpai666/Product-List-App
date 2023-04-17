import axios from "axios";

export const getData = async () => {
    try {
        const { data } = await axios.get(
            "https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json"
        );
        return data ? Object.keys(data).map((itemId) => ({
            id: itemId,
            ...data[itemId],
        })) : [];
    } catch (error) {
        throw error;
    }
};

export const sendData = async (list) => {
    try {
        await axios.post(
            "https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list.json",
            list
        );
    } catch (error) {
        throw error;
    }
};

export const deleteData = async (itemId) => {
    try {
        await axios.delete(
            `https://product-list-b59c8-default-rtdb.europe-west1.firebasedatabase.app/list/${itemId}.json`
        );
    } catch (error) {
        throw error;
    }
};
