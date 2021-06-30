import { useCallback, useEffect, useState } from 'react'
import {Fox, Chicken, Corn, Boat, Farmer, items} from './components/allItems'
import $, { event } from "jquery";
import 'bootstrap/dist/css/bootstrap.css'
import Popover from './components/popover'
import EmptyBoat from './components/emptyBoat'
import { Constraints } from './components/constraints'
import Particles from './components/particles'
import { DeadChicken, DeadCorn, DeadCornFarShore, DeadChickenFarShore } from './components/dead'
import { CornInBoatChickenFarShore } from './components/cornInBoatChickenFarShore'
import { FoxInBoatChickenFarShore } from './components/foxInBoatChickenFarShore'
import { ChickenInBoatEmptyFarShore } from './components/chickenInBoatEmptyFarShore'

export default function Home() {
  const [clickedItem, setClickedItem] = useState('')
  const [itemInBoat, setItemInBoat] = useState('')
  const [placeItemOnFarShore, setPlaceItemOnFarShore] = useState(null)
  const [animationEnd, setAnimationEnd] = useState(null)
  const [itemOnFarShore, setItemOnFarShore] = useState(null)
  
  useEffect(() => {
    Popover();
    Particles();
    const boatImg = document.getElementById('boat')
    if(clickedItem === 'chicken') {
      boatImg.addEventListener('animationend', () => {
        setAnimationEnd('Animation ended');
      });
    } else if (itemOnFarShore === 'corn+chicken') {
        return
    } else if (itemOnFarShore === 'fox+chicken') {
        return
    } else if (clickedItem === 'corn+chicken') {
        boatImg.addEventListener('animationend', () => {
          setAnimationEnd('Animation ended');
          setItemOnFarShore('corn')
        });
    } else if (clickedItem === 'fox+chicken') {
        boatImg.addEventListener('animationend', () => {
          setAnimationEnd('Animation ended');
          setItemOnFarShore('fox')
        });
    } else if (animationEnd === 'Animation ended-chicken') {
        boatImg.addEventListener('animationend', () => {
          setAnimationEnd('Animation ended');
        });
      } 
  })

  const moveItem = (item) => {
    setClickedItem(item)
    setItemInBoat(item)
    const currentItem = document.getElementById(item);
    currentItem.classList.add('hidden')
    moveBoatToFarShore(item);
  }

  const moveBoatToFarShore = () => {
    if (placeItemOnFarShore === 'chicken' && clickedItem === 'corn') {
      setItemInBoat('corn+chicken')
      return
    } else if (placeItemOnFarShore === 'chicken' && clickedItem === 'fox') {
        setItemInBoat('fox+chicken')
    } else if(clickedItem === 'corn') {
        setItemInBoat('corn')
        const deadChicken = document.getElementById('chicken');
        deadChicken.classList.add('dead')
    } else if(clickedItem === 'fox') {
        setItemInBoat('fox')
        const deadChicken = document.getElementById('corn');
        deadChicken.classList.add('dead')
      }
  }

  const endOfFarShoreAnimation = () => {
    boatImg.addEventListener('animationend', () => {
      setAnimationEnd('Animation ended');
    });
  }

  const moveBoatToNearShore = (item) => {
    if (clickedItem === 'corn+chicken') {
      setItemOnFarShore('corn+chicken')
    } else if (clickedItem === 'fox+chicken') {
      setItemOnFarShore('fox+chicken')
    } else {
      setPlaceItemOnFarShore(item) 
      const boatImg = document.getElementById('boat-to-near-shore')
      boatImg.classList.add('move-to-near-shore')
      boatImg.addEventListener('animationend', () => {
        setAnimationEnd('Animation ended-chicken');
      })
    }
  }


  if (clickedItem === '') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} onClick={() => moveItem('fox')}>
            <Fox />
          </div>
          <div id={'chicken'} onClick={() => moveItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} onClick={() => moveItem('corn')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <EmptyBoat />
        </div>
      </main>
    ) 
  } else if (clickedItem === 'corn') {
    return (
      <DeadChicken />
    )
  } else if (animationEnd === 'Animation ended-chicken' && clickedItem === 'chicken') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
        <div id={'all-elements'} className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} onClick={() => setClickedItem('fox+chicken')}>
            <Fox />
          </div>
          <div id={'chicken'} className={'hidden'} onClick={() => moveItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} onClick={() => setClickedItem('corn+chicken')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <div className={'float '}>
            <div id={'boat-to-near-shore'}>
              <div id={'boat'} className={'d-flex flex-column justify-content-end rotate'} 
                onClick={() => moveBoatToNearShore('chicken')}>
                <div className={'position-relative farmer-position'}>
                  <Farmer />
                </div>
                <div className={'position-absolute'}>
                  <Boat />
                </div>
              </div>
            </div>
          </div>
          <div className={'position-absolute col-11 d-flex justify-content-end'}>
            <Chicken />
          </div>
        </div>
      </main>
    )
  }
  else if (itemOnFarShore === 'chicken') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
        <div className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} onClick={() => moveItem('fox')}>
            <Fox />
          </div>
          <div id={'chicken'} className={'hidden'} onClick={() => moveItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} onClick={() => moveItem('corn')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <EmptyBoat />
        </div>
      </main>
    ) 
  } else if (clickedItem === 'fox') {
    return (
      <DeadCorn />
    )
  } else if (itemOnFarShore === 'corn') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
      <div id={'all-elements'}className={'d-flex justify-content-start align-items-end'}>
        <div id={'fox'}>
          <Fox />
        </div>
        <div id={'chicken'} className={'hidden'} >
          <Chicken />
        </div>
        <div className={'hidden'} >
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Corn />
        </div>
        <div className={'float z-front-3 rotate far-position-2-items'}>
            <div id={'boat-to-near-shore'}>
              <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate'} 
                onClick={() => moveBoatToNearShore('chicken')}>
                <div className={'position-relative farmer-position'}>
                  <Farmer />
                </div>
                <div className={'position-absolute'}>
                  <Boat />
                </div>
              </div>
            </div>
          </div>
          <div id={'corn'} className={'position-absolute col-10 justify-content-end-custom z-front'}>
            <Corn />
          </div>
          <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}>
            <Chicken />
          </div>
        </div>
    </main>
    )
  }  else if (itemOnFarShore === 'fox') {
    return (
      <main className={'landscape main-height'}>
        <Constraints />
      <div id={'all-elements'}className={'d-flex justify-content-start align-items-end'}>
        <div id={'fox'} className={'hidden'}>
          <Fox />
        </div>
        <div id={'chicken'} className={'hidden'} >
          <Chicken />
        </div>
        <div >
        <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
          <Corn />
        </div>
        <div className={'float z-front-3 rotate far-position-2-items'}>
            <div id={'boat-to-near-shore'}>
              <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate'} 
                onClick={() => moveBoatToNearShore('chicken')}>
                <div className={'position-relative farmer-position'}>
                  <Farmer />
                </div>
                <div className={'position-absolute'}>
                  <Boat />
                </div>
              </div>
            </div>
          </div>
          <div id={'corn'} className={'position-absolute col-10 justify-content-end-custom z-front'}>
            <Fox/>
          </div>
          <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}>
            <Chicken />
          </div>
        </div>
    </main>
    )
  } else if (itemOnFarShore === 'corn+chicken') {
      return (
        <DeadCornFarShore />
    ) 
  } else if (itemOnFarShore === 'fox+chicken') {
      return (
        <DeadChickenFarShore />
    ) 
  } else if (animationEnd === 'Animation ended') {
      return (
        <main className={'landscape main-height'}>
          <Constraints />
        <div id={'all-elements'} className={'d-flex justify-content-start align-items-end landscape col-12'}>
          <div id={'fox'}>
            <Fox />
          </div>
          <div id={'chicken'} className={'hidden'} >
            <Chicken />
          </div>
          <div id={'corn'}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <div className={'float z-front'}>
            <div id={'boat-to-near-shore'}>
              <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate far-shore-boat-position'} 
                onClick={() => moveBoatToNearShore('chicken')}>
                <div className={'position-relative farmer-position'}>
                  <Farmer />
                </div>
                <div className={'position-absolute'}>
                  <Boat />
                </div>
              </div>
            </div>
          </div>
          <div className={'position-absolute col-11 d-flex justify-content-end'}>
            <Chicken />
          </div>
        </div>
      </main>
      )
  } else if (clickedItem === 'corn+chicken') {
    return (
      <CornInBoatChickenFarShore />
    )
  } else if (clickedItem === 'fox+chicken') {
    return (
      <FoxInBoatChickenFarShore />
    )
  } else {
    return (
      <ChickenInBoatEmptyFarShore />
    ) 
  }
}

//   function Boat(item) {
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