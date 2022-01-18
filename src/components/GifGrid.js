import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({Categoria}) => {

    const {data:images,loading} = useFetchGifs(Categoria);

     
    return (
        <>
            <h3 className='animate__animated animate__fadeInLeft'>{Categoria}</h3>

            { loading && <p className='animate__animated animate__fadeInLeftBig'> Loading</p> }
            <div className='card-grid'>
                
                {
                    images.map( img =>  
                    <GifGridItem 
                            key = {img.id}
                            {...img}>

                            </GifGridItem>
                    )
                }
                
            </div>
        </>
    )
}

 
