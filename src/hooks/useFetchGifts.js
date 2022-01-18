import { useState,useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (Categoria) =>{

const [state, setstate] = useState(
    {
        data:[],
        loading: true
    }
);

useEffect ( () => {

    getGifs(Categoria)
             .then(imgs => {

                    setstate({
                        data: imgs,
                        loading: false
                    });

             }) 

}, [Categoria])
    // useEffect( () =>{
    //     //getGifs(Categoria).then(imgs => setImages(imgs));
    //     getGifs(Categoria)
    //         .then(setImages);   
    // },[Categoria]);

return state;

}