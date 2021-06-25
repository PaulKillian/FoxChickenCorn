import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import nearShore from '../public/images/near-shore.png'
import farShore from '../public/images/far-shore.png'
import poof from '../public/images/poof.png'
import {Fox, Chicken, Corn, Boat, Farmer, items} from './components/allItems'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import EmptyBoat from './components/emptyBoat'
import { Constraints } from './components/constraints'
import Particles from './components/particles'

export default function Home() {
  const [clickedItem, setClickedItem] = useState('')
  const [itemInBoat, setItemInBoat] = useState('')
  const [placeItemOnShore, setPlaceItemOnShore] = useState(null)
  const [animationEnd, setAnimationEnd] = useState(null)
  
  useEffect(() => {
    Popover();
    Particles();
    const boatImg = document.getElementById('boat')
    const chicken = document.getElementById('chickenOnBoat')
    boatImg.addEventListener('animationend', () => {
      setAnimationEnd('Animation ended');
    });
  })

  const moveItem = (item) => {
    setClickedItem(item)
    setItemInBoat(item)
    const currentItem = document.getElementById(item);
    currentItem.classList.add('hidden')
    moveBoatToFarShore(item);
  }

  const moveBoatToFarShore = useCallback(() => {
    if(clickedItem === 'corn') {
      setItemInBoat('corn')
      const deadChicken = document.getElementById('chicken');
      deadChicken.classList.add('dead')
    }
    if(clickedItem === 'fox') {
      setItemInBoat('fox')
      const deadChicken = document.getElementById('corn');
      deadChicken.classList.add('dead')
    }
  }, [])

  const moveBoatToNearShore = () => {
    const boatImg = document.getElementById('boat')
        boatImg.classList.add('to-near-shore')
  }

  const itemOnFarShore = (item) => {
    setPlaceItemOnShore(item)
  }

  console.log(placeItemOnShore)

  if (clickedItem === '') {
    return (
      <main className={'landscape main-height'}>
        <canvas className={'position-absolute'} id="cvs"></canvas>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} aria-describedby="tooltip" onClick={() => moveItem('fox')}>
            <Fox />
          </div>
          <div id={'chicken'} aria-describedby="tooltip" onClick={() => moveItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} aria-describedby="tooltip" onClick={() => moveItem('corn')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <EmptyBoat />
          {/* <Image src={farShore} alt="The far shore" /> */}
        </div>
      </main>
    ) 
  } else if (clickedItem === 'corn' && itemInBoat === 'corn') {
    return (
      <main className={'landscape main-height'}>
        <canvas className={'position-absolute'} id="cvs"></canvas>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end landscape'}>
          <div id={'fox'} aria-describedby="tooltip">
            <Fox />
          </div>
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />The Chicken eat the corn!
          <div id={'chicken'} className={'hidden'} aria-describedby="tooltip" >
            <Chicken />
          </div>
          <div id={'corn'} aria-describedby="tooltip">
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          </div>
          <div id={'boat'} className={'d-flex flex-column justify-content-end float'} >
          <div className={'position-relative farmer-position'}>
            <Farmer />
          </div>
          <div className={'position-absolute'}>
            <Corn />
          </div>
          <div className={'position-absolute'}>
            <Boat />
          </div>
        </div>
          {/* <Image src={farShore} alt="The far shore" /> */}
        </div>
      </main>
      )
  } else if (clickedItem === 'fox' && itemInBoat === 'fox') {
    return (
      <main className={'landscape main-height'}>
        <canvas className={'position-absolute'} id="cvs"></canvas>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end landscape'}>
          <div id={'fox'} className={'hidden'} aria-describedby="tooltip">
            <Fox />
          </div>
          <div id={'chicken'} aria-describedby="tooltip" >
            <Chicken />
          </div>
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />
          <div id={'corn'} aria-describedby="tooltip">
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          </div>
          <div id={'boat'} className={'d-flex flex-column justify-content-end float'} >
          <div className={'position-relative farmer-position'}>
            <Farmer />
          </div>
          <div className={'position-absolute'}>
            <Fox />
          </div>
          <div className={'position-absolute'}>
            <Boat />
          </div>
        </div>
          {/* <Image src={farShore} alt="The far shore" /> */}
          </div>
        </main>
      )
  } else if (animationEnd) {
      return (
        <main className={'landscape main-height'}>
          <canvas className={'position-absolute'} id="cvs"></canvas>
          <Constraints />
        <div className={'d-flex justify-content-start align-items-end landscape'}>
          <div id={'fox'} aria-describedby="tooltip">
            <Fox />
          </div>
          <div id={'chicken'} className={'hidden'} aria-describedby="tooltip" >
            <Chicken />
          </div>
          <div id={'corn'} aria-describedby="tooltip">
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate far-shore-position'} onClick={moveBoatToNearShore}>
          <div className={'position-relative farmer-position'}>
            <Farmer />
          </div>
          <div className={'position-absolute'}>
            <Boat />
          </div>
        </div>
        <div className={'position-absolute far-shore-chicken-position'} onClick={() => itemOnFarShore('chicken')}>
            <Chicken />
          </div>
          {/* <Image src={farShore} alt="The far shore" /> */}
        </div>
      </main>
      )
  } else {
    return (
      <main className={'landscape main-height'}>
        <canvas className={'position-absolute'} id="cvs"></canvas>
        <Constraints />
      <div className={'d-flex justify-content-start align-items-end landscape'}>
        <div id={'fox'} aria-describedby="tooltip">
          <Fox />
        </div>
        <div id={'chicken'} className={'hidden'} aria-describedby="tooltip" >
          <Chicken />
        </div>
        <div id={'corn'} aria-describedby="tooltip">
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Corn />
        </div>
        <div id={'boat'} className={'d-flex flex-column justify-content-end boat-animation'}>
        <div className={'position-relative farmer-position'}>
          <Farmer />
        </div>
        <div id={'chickenInBoat'} className={'position-absolute'} 
          onClick={() => itemOnFarShore('chicken')}>
          <Chicken />
        </div>
        <div className={'position-absolute'}>
          <Boat />
        </div>
      </div>
        {/* <Image src={farShore} alt="The far shore" /> */}
      </div>
    </main>
    )
  }
}

//   function Boat(item) {
//     console.log(item)
//     switch(item) {
//       case 'fox':
//         return <FoxInBoat />;
//       case 'chicken':
//         return <ChickenInBoat />;
//       case 'corn': 
//         return <CornInBoat />;
//       default:
//         return <EmptyBoat />;
//   }
// }