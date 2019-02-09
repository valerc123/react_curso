import React from 'react';
import Media from './media.js';
import './playlist.css';
// import Play from '../../icons/components/play';
// import Volumen from '../../icons/components/volumen';
// import Pause from '../../icons/components/pause';
// import FullScreen from '../../icons/components/fullscreen';
//listas en react
//componente funcional
 function Playlist (props) {  
    // const categories = props.data.categories;
     return(
        //  <div>
        //     {
        //         categories.map((categoria) =>{
        //             return <div key = {categoria.id}>           
        //                 <h4>{categoria.description}</h4>
        //                 <h3>{categoria.title}</h3>
                        <div className="Playlist">
                        {/* <Play size={50} color="red"/>
                        <Pause size={50} color="green"/>
                        <Volumen size={50} color="blue"/>
                        <FullScreen size={50} color="black"/> */}
                        {
                            props.playlist.map((item) =>{
                            return <Media {...item} key = {item.id}  />
                            })
                        }
                        </div>
        //             </div>
        //         })
        //     } 
        // </div>     
    )
    
}
export default Playlist;