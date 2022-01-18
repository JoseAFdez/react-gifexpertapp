import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
 //const categorias = ['Dragon ball', 'One Punch', 'Samurai X']
const [categorias, setCategorias] = useState(['Dragon Ball']);

// const handleAdd = () => {
//     const nuevaCategoria = 'Bola de Dan';

//     setCategorias(categ => [...categ, nuevaCategoria]);      

// }
    return (
        <>
           <h2> GifExpertApp</h2>
           <AddCategory setCategorias ={setCategorias}></AddCategory>
           <hr/>
           <ol>
             {
                 categorias.map( categoria =>  
                    <GifGrid 
                        key = {categoria}
                        Categoria = {categoria}
                    />
                 )
             }
            
           </ol> 
        </>  

   );
}

export default GifExpertApp;