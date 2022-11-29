import Image from 'next/image'
import poof from '../../public/images/poof.png'
import { useState, useEffect } from 'react';

export const NearShore = (props) => {
  const clickedItem = (event) => {
    const newScene = []
    props.nearShoreScene.map(item => {
      if (item.id !== event.target.id) {
        newScene.push(item)
      } else {
        props.
      }   
    });
    props.setNearShoreScene(newScene)
  }

  return (
    <div className={'d-flex justify-content-start align-items-end item'}>
      {props.nearShoreScene.map(item => {
        return (
          <Image 
            id={item.id}
            key={item.id}
            src={item.img} 
            alt={item.alt} 
            width={130}
            height={150}
            onClick={() => {clickedItem(event)}}
          />
        )
      })}  
    </div>
  )
}

