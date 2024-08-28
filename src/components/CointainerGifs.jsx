import React from 'react'

export const CointainerGifs = ({gifs, nombreCategoria}) => {

  return (
    <>
        <h1 className='fst-italic text-nowrap bg-body-secondary border m-2 p-3 text-center fs-4'>{nombreCategoria?`Categoria:${nombreCategoria}`: "Busca tu Gif"}</h1>

        <div className="m-2 w-25 ">
            {gifs.map(({id,title,url})=>{
                return(
                    <div className='row gx-5 d-flex m-2' key={id}>
                      <img className="w-100 m-5 l-5  border border-4 rounded-top ms-2" src={url} alt="image"/>
                    </div>                   
                )
            })}
        </div>
    </>
  )
}
