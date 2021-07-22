import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    const {data:images,loading}=useFetchGifs(category);
    // useEffect(()=>{
    //     getGift(category)
    //         // .then(imgs=>setImages(imgs)) 
    //         .then(setImages); // Estoy es igual a lo de arriba
    // },[category])

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown animate__delay-2s" >{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando</p>}

            <div className="card-grid">
                
                    {images.map((img)=>(

                            <GifGridItem key={img.id} {...img}/>
                    ))
                    }
                    
            
            </div>
        </>
    )
}
