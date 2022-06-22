import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Postagens() {
    const [postagens, setpostagens] = useState([]);
    let url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        const getPostagens = async () => {
            await axios
            .get (url)
            .then ((response) => {
                console.log(response.data);
                setpostagens (response.data);
                console.log(response);
            })
            .catch ((err) => console.log(err));
        };
        getPostagens();
    }, [url])
    

  return (
    <div>Postagens</div>
  )
}
