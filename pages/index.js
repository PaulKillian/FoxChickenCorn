import { useMemo, useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BoatAndFarmer from './components/boatAndFarmer'
import { Constraints } from './components/riddleDescription'
import Particles from './components/particles'
import Image from 'next/image'
import chicken from '../public/images/chicken.png'
import corn from '../public/images/corn.png'
import fox from '../public/images/fox.png'
import { NearShore } from './components/nearShore'
import { FarShore } from './components/farShore'

export default function Home() {
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
  const [clickedItem, setClickedItem] = useState(null)
  const [placeItemInBoat, setPlaceItemInBoat] = useState([])
  const [boatIsOnNearShore, setBoatIsOnNearShore] = useState(true)
  const [animationEnd, setAnimationEnd] = useState(null)
  const [itemOnFarShore, setItemOnFarShore] = useState([])
  const [hasBeenInBoat, setHasBeenInBoat] = useState([])
  
  useEffect(() => {
    Particles();
  })

  const checkItem = (item) => {
    let checkItem = ''
    if (item.alt === 'corn' && itemOnFarShore.length === 0) {
      checkItem = 
        {
          dead: 'chicken',
          hidden: 'corn'
        }
      setClickedItem(checkItem)
    } else if (item.alt === 'fox' && itemOnFarShore.length === 0) {
      checkItem = 
        {
          dead: 'corn',
          hidden: 'fox'
        }
        setClickedItem(checkItem)
    } else {
      checkItem = 
        {
          hidden: 'chicken'
        }
        setClickedItem(checkItem)
    }
      placeInBoat(item)
  }

  const placeInBoat = (item) => {
    setPlaceItemInBoat([item])
    itemHasBeenInBoat(item)
  }

  const itemHasBeenInBoat = (item) => {
    let boatItem = [...hasBeenInBoat]
    boatItem.push(item)
    setHasBeenInBoat(boatItem)
    itemDropOff(item)
  }

  const sendBoatToFarShore = () => {
    if (clickedItem.dead) {
        return
    } else {
      const boat = document.getElementById('boat-container')
    boat.classList.add('boat-animation')
    boat.addEventListener('animationend', () => {
      setBoatIsOnNearShore(false)
      removeItemFromBoat()
    })
  }
}

  const itemDropOff = (item) => {
    const boat = document.getElementById('boat')
    boat.addEventListener('animationend', () => {
      setAnimationEnd('boat landed on far shore');
      const itemForFarShoreDropOff = [item]
      setItemOnFarShore(itemForFarShoreDropOff);
    })
  }

  const sendBoatToNearShore = useCallback(() => {
    const boat = document.getElementById('boat-container')
    boat.classList.add('boat-animation-to-nearShore')
    boat.addEventListener('animationend', () => {
      boat.classList.remove('boat-animation-to-nearShore', 'boat-animation')
      setBoatIsOnNearShore(true)
      setPlaceItemInBoat([])
    })
  })

  const removeItemFromBoat = () => {
    itemOnFarShore.legnth = 1
    ? setPlaceItemInBoat([])
    : null
  }

  // const Snow = useMemo(() => {
  //   return (
  //       <canvas className={'position-absolute'} id="cvs"></canvas>
  //   ) 
  // }, [])


  return (
    <main className={'landscape main-height'}> 
      {/* <Snow /> */}
      <canvas className={'position-absolute'} id="cvs"></canvas>
      <Constraints />
      <div className={'d-flex justify-content-between'}>
        <div className={'d-flex justify-content-start align-items-end'}>
          <NearShore 
            checkItem={checkItem} 
            items={items}
            clickedItem={clickedItem}
            itemOnFarShore={itemOnFarShore}
            placeItemInBoat={placeItemInBoat}
            hasBeenInBoat={hasBeenInBoat}
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