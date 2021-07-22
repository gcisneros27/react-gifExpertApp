import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(category)=>
{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{  //No puede ser async

        getGifs(category)
            .then(imgs=>{ //Aunque puede retornar un then     
                    setstate({ 
                        data:imgs,
                        loading:false
                    });
            })
    },[category])

    return state; //{data:[],loading:true}
}