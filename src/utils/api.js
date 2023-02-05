import axios from "axios";
export async function getData(setItems) {

    try {
        await axios.get(
            'https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e'
        ).then(response => setItems(response))
    } catch (error) {
        setItems([])
        console.log(error)
    }
}

export async function sendData(list) {
    try {
        await axios.put(
            'https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e',
            {
                list
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": "$2b$10$3lRbwOeHk95tiwAdCDDHq.uhtryglyvS/LD1S8BfLPgWWn.AqldMa"
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}