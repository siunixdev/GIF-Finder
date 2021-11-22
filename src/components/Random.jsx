import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
const URL = process.env.REACT_APP_URL

const Random = () => {

  const [tag, setTag] = useState('')
  const [gif, setGif] = useState('')

  const fecthData = async (tag) => {
    const url = `${URL}/random?api_key=${API_KEY}&tag=${tag}`
    const { data } = await axios.get(url);

    const imageSrc = data.data.images.downsized_large.url

    setGif(imageSrc)
  }

  useEffect(() => {

    fecthData(tag)

  }, [tag])

  const handleClick = () => {
    fecthData(tag)
  }

  return (
    <div className="container">
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Get new one</button>
      <h3>Random GIF</h3>
      <img width="500" src={gif} alt="Random GIF" />
    </div>
  );
}

export default Random