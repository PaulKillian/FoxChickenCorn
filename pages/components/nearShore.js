import Image from 'next/image'
import poof from '../../public/images/poof.png'

export const NearShore = (props) => {
  if (props.clickedItem) {
    return (
      <div className={'d-flex justify-content-start align-items-end'}>
        {props.nearShoreItems.map(item => {
          return (
            <Image className={props.clickedItem === item.alt ? 'hidden' : null}
              onClick={() => props.checkItem(item.id)}
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
        {props.nearShoreItems.map(item => {
          return (
            <Image onClick={() => props.checkItem(item.id)}
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


