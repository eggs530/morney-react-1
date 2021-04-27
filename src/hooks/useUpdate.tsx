import {useEffect, useRef} from 'react';

const useUpdate = (fn:()=>void,deeps:any[])=>{
    const count = useRef(0)
    useEffect(()=>{
        count.current +=1
    })
    useEffect(()=>{
        if(count.current>1){
            fn()
        }
    },deeps)//不可变数据
}

export default useUpdate