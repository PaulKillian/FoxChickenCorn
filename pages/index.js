import { useMemo, useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BoatAndFarmer from './components/boatAndFarmer'
import { RiddleDescription } from './components/riddleDescription'
import Particles from './components/particles'
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
  ]);

  const [item, setItem] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [placeItemInBoat, setPlaceItemInBoat] = useState([]);
  const [boatIsOnNearShore, setBoatIsOnNearShore] = useState(true);
  const [boatIsOnFarShore, setBoatIsOnFarShore] = useState(false)
  const [animationEnd, setAnimationEnd] = useState(null);
  const [itemOnFarShore, setItemOnFarShore] = useState([]);
  const [hasBeenInBoat, setHasBeenInBoat] = useState([]);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    snow()
  }, []);
  
  const value = 0;
  const snow = useCallback(() => {Particles()}, [value]);

  const checkItem = (item) => {
    setItem(item)
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
    itemDropOff(item)
  }

  const itemHasBeenInBoat = (item) => {
    let boatItem = [...hasBeenInBoat]
    boatItem.push(item)
    setHasBeenInBoat(boatItem)
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
        setBoatIsOnFarShore(true)
        itemHasBeenInBoat(item)
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
    const boatContainer = document.getElementById('boat-container')
    boatContainer.classList.add('boat-animation-to-nearShore')
    boatContainer.addEventListener('animationend', () => {
      boatContainer.classList.remove('boat-animation-to-nearShore', 'boat-animation')
      const boat = document.getElementById('boat')
      boat.classList.remove('far-shore-rotate')
      setBoatIsOnNearShore(true)
      setPlaceItemInBoat([])
      setBoatIsOnFarShore(false)
    })
  })

  const removeItemFromBoat = () => {
    itemOnFarShore.legnth = 1
    ? setPlaceItemInBoat([])
    : null
  }


  return (
    <main className={'landscape main-height'}> 
      <canvas className={'position-absolute'} id="cvs"></canvas>
      <RiddleDescription />
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
            boatIsOnFarShore={boatIsOnFarShore}
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
          hasBeenInBoat={hasBeenInBoat}
        />
      </div>
    </main>
  )
}