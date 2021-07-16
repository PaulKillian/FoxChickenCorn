import { useEffect } from 'react'
import Image from 'next/image'

export const FarShore = (props) => {
    useEffect(() => {
        // props.farShoreItems(props.itemOnFarShore)
    })
    if (props.animationEnd) {
        return (
            <div className={'d-flex justify-content-end align-items-end'}>
            {props.hasBeenInBoat.map(item => {
                return (
                    <Image onClick={() => props.checkItem(item)}
                    key={item.id}
                    src={item.img} 
                    alt={item.alt} 
                    width={130}
                    height={150}
                    />
                )
                })}  
            </div>
        )
    } else {
        return (
            null
        )
    }
    
}
