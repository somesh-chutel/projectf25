import { useState } from "react";

const useCounter = ()=>{

    const [count,setCount] = useState(20);


    const incCounter = ()=>{
        setCount(count + 1);
    }

    const decCounter = ()=>{
        setCount(count - 1);
    }


    return [count,incCounter,decCounter];
}


export default useCounter;