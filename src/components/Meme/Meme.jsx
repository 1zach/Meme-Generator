import Data from "../../assets/memeData"
import React from 'react'
import './Meme.css'

export default function Meme() {
    const [first, change] = React.useState()
    const [formData, setFormData] = React.useState({top: "", bottom: "", random: "https://i.imgflip.com/30b1gx.jpg"})
    
    function newMeme() {
    let array = first.data.memes
    const randomElement = array[Math.floor(Math.random() * array.length)]
    const url = randomElement.url
    setFormData(prevMeme => ({
        ...prevMeme,
        random: url
    }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => change(data))
    }, [])

    function handleChange(e) {
        setFormData(prevFormData => {
            return {...prevFormData,
                    [e.target.name]:[e.target.value]}
        })
    }

    return(
        <div>
        <form className = "flex flex-col justify-center gap-8 my-10">
            <div className ="flex justify-between gap-8">
            <input type="text" id="top-text" name="top" placeholder="Top Text" className="pl-2 border border-slate-600 rounded w-1/2 h-10" onChange={handleChange}></input>
            <input type="text" id="top-text" name="bottom" placeholder="Bottom Text" className="pl-2 border border-slate-600 rounded w-1/2 h-10" onChange={handleChange}></input>
            </div>
            <div value="Get a new Meme" onClick={newMeme} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded p-4 cursor-pointer text-center">Get a New Meme</div>
        </form>
        <div className="relative">
            <img src={formData.random} className="w-[600px] mb-10"  />
            <h1 className = "absolute uppercase text-white text-5xl top-5 w-full text-center memeText">{formData.top}</h1>
            <h1 className = "absolute uppercase bottom-5 text-center text-white w-full text-5xl memeText">{formData.bottom}</h1>
         </div>
         </div>
         
    )
}