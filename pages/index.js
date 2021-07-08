import { useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BoatAndFarmer from './components/boatAndFarmer'
import { Constraints } from './components/constraints'
import Particles from './components/particles'
import Image from 'next/image'
import chicken from '../public/images/chicken.png'
import corn from '../public/images/corn.png'
import fox from '../public/images/fox.png'
import { NearShore } from './components/nearShore'
import { FarShore } from './components/farShore'

export default function Home() {
  const [clickedItem, setClickedItem] = useState(null)
  const [items, setitems] = useState([
    {
      img: fox,
      alt: 'fox',
      id: 1,
    },
    {
      img: chicken,
      alt: 'chicken',
      id: 2,
    },
    {
      img: corn,
      alt: 'corn',
      id: 3,
    }
  ])
  const [placeItemInBoat, setPlaceItemInBoat] = useState(null)
  const [boatIsOnNearShore, setBoatIsOnNearShore] = useState(true)
  const [animationEnd, setAnimationEnd] = useState(null)
  const [itemOnFarShore, setItemOnFarShore] = useState([])
  
  useEffect(() => {
    Particles();
  })

  const checkItem = (item) => {
    if (item.id === 1) {
        setClickedItem(item)
        setPlaceItemInBoat([item])
    } else if (item.id === 2) {
        setClickedItem(item)
        setPlaceItemInBoat([item])
    } else {
        setClickedItem(item)
        setPlaceItemInBoat([item])
    }
    itemDropOff(item)
  }

  const sendBoatToFarShore = () => {
    const boat = document.getElementById('boat-container')
    boat.classList.add('boat-animation')
  }

  const itemDropOff = (item) => {
    const boat = document.getElementById('boat')
    boat.addEventListener('animationend', () => {
      setAnimationEnd('boat landed on far shore');
      const itemForFarShoreDropOff = [item]
      setItemOnFarShore(itemForFarShoreDropOff);
      setBoatIsOnNearShore(false)
    })
  }

  const sendBoatToNearShore = () => {
    const boat = document.getElementById('boat-container')
    boat.classList.add('boat-animation-to-nearShore')
    boat.addEventListener('animationend', () => {
      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation')
      setBoatIsOnNearShore(true)
    })
  }

  return (
    <main className={'landscape main-height'}> 
      <Constraints />
      <div className={'d-flex justify-content-between'}>
        <div className={'d-flex justify-content-start align-items-end'}>
          <NearShore 
            checkItem={checkItem} 
            items={items}
            clickedItem={clickedItem}
          />
          <BoatAndFarmer 
            clickedItem={clickedItem}
            items={items}
            placeItemInBoat={placeItemInBoat}
            itemOnFarShore={itemOnFarShore}
            boatIsOnNearShore={boatIsOnNearShore}
            sendBoatToFarShore={sendBoatToFarShore}
            sendBoatToNearShore={sendBoatToNearShore}
          />
        </div>
        <FarShore 
          itemOnFarShore={itemOnFarShore}
          items={items}
          animationEnd={animationEnd}
        />
      </div>
    </main>
  )
}