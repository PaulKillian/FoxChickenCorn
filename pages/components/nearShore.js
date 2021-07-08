import Image from 'next/image'
import poof from '../../public/images/poof.png'

export const NearShore = (props) => {
  if (props.clickedItem) {
    return (
      <div className={'d-flex justify-content-start align-items-end'}>
        {props.items.map(item => {
          return (
            <Image className={props.clickedItem.alt === item.alt ? 'hidden' : null}
              key={item.id}
              src={props.clickedItem === item.alt ? poof : item.img}
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
      <div className={'d-flex justify-content-start align-items-end'}>
        {props.items.map(item => {
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
  }
}


