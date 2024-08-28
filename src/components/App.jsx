import { useGif } from "../hooks/useGif"
import { CointainerGifs } from "./CointainerGifs"
import { SearchGif } from "./SearchGif"

export const App = () => {
    const {gifs, handdleGif, nombreCategoria} = useGif()
    return (
    <>
        <SearchGif handdleGif={handdleGif}/>
        <CointainerGifs gifs = {gifs} nombreCategoria = {nombreCategoria}/>
    </>
  )
}