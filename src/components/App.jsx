import { useGif } from "../hooks/useGif"

export const App = () => {

    const {gif, handdleGif} = useGif()

    return (
    <>
        <div className="container">
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <button onClick={handdleGif} className="btn btn-outline-success">Generar Gif</button>
            </div>
            <div className="d-flex flex-row justify-content-center alig-items-center">
                <img className="w-50 m-5" src= {gif} alt="image"/>
            </div>
        </div>
    </>
  )
}