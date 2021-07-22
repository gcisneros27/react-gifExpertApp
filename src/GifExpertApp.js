import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories=['One Punch','Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['Batman'])

    // const handleAdd=()=>{
    //     const vadd='The Simsons';
    //     setCategories([...categories,vadd]);
    //     // setCategories(cats=>[...cats,vadd]); //otra forma
    // }
    
    return (
        <>
            <h2>GiftExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category=>(

                        <GifGrid 
                        category={category} 
                        key={category}
                        />
                        
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
