import { useState } from "react"
import { reqGif } from "../service/gifs"
 
export const useGif = () =>{
    const [gifs,setGifs] = useState([])

    const [nombreCategoria, setNombreCategoria] = useState("")
 
    const handdleGif = (e, categoria) =>{
        // Evita la recarga completa del navegador
        e.preventDefault()
        reqGif(categoria).then((gifs) => {
            setGifs(gifs)
        })
        setNombreCategoria(categoria)
    }
 
    return{
        gifs,
        handdleGif,
        nombreCategoria
    }
}