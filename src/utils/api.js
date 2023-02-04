import axios from "axios";
import {useState} from "react";

export const getFormData = () => {
    // let data;
    // let request = new XMLHttpRequest();
    // request.open('GET', 'https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e' )
    // request.responseType = 'json';
    // request.onload = () => {
    //
    //    data = request.response.record.sample
    //
    // }
    // request.send()
    // return data;
    fetch('https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e').then(response => console.log(response))

}
export const getData = () => {
    const [data, setData] = useState([])
    axios.get('https://api.jsonbin.io/v3/b/63de5f3bebd26539d075f29e').then((response) => setData(response));
    return data
}