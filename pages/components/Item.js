import Image from 'next/image'

export const Item = (props) => {
    return (
      <Image className={'shadow'}
          src={props.img} 
          alt={props.alt} 
          width={130}
          height={150}
      />
    )
  }