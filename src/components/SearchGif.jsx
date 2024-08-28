import React, { useState } from 'react'

export const SearchGif = ({handdleGif}) => {
  
    const [categoria, setCategoria] = useState('')
    
    return (
    <>
        <div className="container">
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form onSubmit={(e) => {handdleGif(e, categoria)}} className="d-flex">
                    <input type="text" className="form-control m-1 shadow bg-body-tertiary " onChange={(e) => {setCategoria(e.target.value)}} />
                    <input type="submit" value={"Buscar"} className="btn btn-outline-success"/>
                </form>
            </div>
            <br />
        </div>
    </>
  )
  
}
