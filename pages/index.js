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
  const [nearShoreItems, setNearShoreItems] = useState([
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
  const [itemInBoat, setItemInBoat] = useState(null)
  const [placeItemOnFarShore, setPlaceItemOnFarShore] = useState(null)
  const [animationEnd, setAnimationEnd] = useState(null)
  const [itemOnFarShore, setItemOnFarShore] = useState(null)
  
  useEffect(() => {
    Particles();

    const boat = document.getElementById('boat')
    boat.addEventListener('animationend', () => {
      setAnimationEnd('boat landed on far shore');
    })
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
  }

  // const placeItemInBoat = (item) => {

  // }

//   const willBeEaten = (item) => {
//     if(clickedItem === 'corn') {
//       setItemInBoat('corn')
//       const deadChicken = document.getElementById('chicken');
//       deadChicken.classList.add('dead')
//     } else if(clickedItem === 'fox') {
//         setItemInBoat('fox')
//         const deadChicken = document.getElementById('corn');
//         deadChicken.classList.add('dead')
//     }
//     moveBoatToFarShore(item);
//   }

//   const moveBoatToFarShore = (item) => {
//     setItemInBoat(item)
//     const currentItem = document.getElementById(item);
//     currentItem.classList.add('hidden')
//     if (placeItemOnFarShore === 'chicken' && clickedItem === 'corn') {
//       setItemInBoat('corn+chickenOnFarShore')
//       return
//     } else if (placeItemOnFarShore === 'chicken' && clickedItem === 'fox') {
//         setItemInBoat('fox+chicken')
//   }
// }

//   const moveBoatToNearShore = (item) => {
//     setClickedItem(item)
//     if (clickedItem === 'corn+chickenOnFarShore') {
//       setItemOnFarShore('corn+chickenOnFarShore')
//     } else if (clickedItem === 'fox+chicken') {
//       setItemOnFarShore('fox+chicken')
//     } else {
//       setPlaceItemOnFarShore(item) 
//       const boatImg = document.getElementById('boat-to-near-shore')
//       boatImg.classList.add('move-to-near-shore')
//       boatImg.addEventListener('animationend', () => {
//         setAnimationEnd('Animation ended/chicken on far shore');
//       })
//     }
//   }

//  const allItems = [
//    {
//      img: fox,
//      alt: 'the fox'
//    },
//    {
//     img: chicken,
//     alt: 'the chicken'
//    },
//    { 
//     img: corn,
//     alt: 'the corn'
//    }
//   ]
    return (
      <main className={'landscape main-height'}> 
        <Constraints />
        <div className={'d-flex justify-content-between'}>
          <div className={'d-flex justify-content-start align-items-end'}>
            <NearShore 
              checkItem={checkItem} 
              nearShoreItems={nearShoreItems}
              clickedItem={clickedItem}
            />
            <BoatAndFarmer 
              clickedItem={clickedItem}
              nearShoreItems={nearShoreItems}
              placeItemInBoat={placeItemInBoat}
            />
          </div>
          <FarShore />
        </div>
      </main>
    )
  }
        {/* <div className={'d-flex justify-content-start align-items-end'}>
          <div id={'fox'} onClick={() => checkItem('fox')}>
            <Fox />
          </div>
          <div id={'chicken'} onClick={() => checkItem('chicken')}>
            <Chicken />
          </div>
          <div id={'corn'} onClick={() => checkItem('corn')}>
          <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
            <Corn />
          </div>
          <EmptyBoat />
        </div> */}

    //   </main>
    // ) 
  // } else if (clickedItem === 'corn') {
  //   return (
  //     <DeadChicken />
  //   )
  // } else if (clickedItem === 'fox') {
  //   return (
  //     <DeadCorn />
  //   )
  // } else if (clickedItem === 'chicken-far-shore') {
  //   return (
  //     <CornInBoatChickenFarShore />
  //   )
  // } else if (clickedItem === 'corn+chickenOnFarShore') {
  //   return (
  //     <CornInBoatChickenFarShore />
  //   )
  // } else if (animationEnd === 'Animation ended/chicken on far shore' && clickedItem === 'chicken') {
  //   return (
  //     <main className={'landscape main-height'}>
  //       <Constraints />
  //       <div id={'all-elements'} className={'d-flex justify-content-start align-items-end'}>
  //         <div id={'fox'} onClick={() => setClickedItem('fox+chicken')}>
  //           <Fox />
  //         </div>
  //         <div id={'chicken'} className={'hidden'} onClick={() => checkItem('chicken')}>
  //           <Chicken />
  //         </div>
  //         <div id={'corn'} onClick={() => setClickedItem('corn+chickenOnFarShore')}>
  //         <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
  //           <Corn />
  //         </div>
  //         <div className={'float'}>
  //           <div id={'boat-to-near-shore'}>
  //             <div id={'boat'} className={'d-flex flex-column justify-content-end rotate'} 
  //               onClick={() => moveBoatToNearShore('chicken')}>
  //               <div className={'position-relative farmer-position'}>
  //                 <Farmer />
  //               </div>
  //               <div className={'position-absolute'}>
  //                 <Boat />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className={'position-absolute col-11 d-flex justify-content-end'}>
  //           <Chicken />
  //         </div>
  //       </div>
  //     </main>
  //   )
  // }
  // else if (itemOnFarShore === 'chicken') {
  //   return (
  //     <main className={'landscape main-height'}>
  //       <Constraints />
  //       <div className={'d-flex justify-content-start align-items-end'}>
  //         <div id={'fox'} onClick={() => checkItem('fox')}>
  //           <Fox />
  //         </div>
  //         <div id={'chicken'} className={'hidden'} onClick={() => checkItem('chicken')}>
  //           <Chicken />
  //         </div>
  //         <div id={'corn'} onClick={() => checkItem('corn')}>
  //         <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
  //           <Corn />
  //         </div>
  //         <EmptyBoat />
  //       </div>
  //     </main>
  //   ) 
  // } else if (itemOnFarShore === 'corn') {
  //   return (
  //     <main className={'landscape main-height'}>
  //       <Constraints />
  //     <div id={'all-elements'}className={'d-flex justify-content-start align-items-end'}>
  //       <div id={'fox'}>
  //         <Fox />
  //       </div>
  //       <div id={'chicken'} className={'hidden'} >
  //         <Chicken />
  //       </div>
  //       <div className={'hidden'} >
  //       <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
  //         <Corn />
  //       </div>
  //       <div className={'float z-front-3 rotate far-position-2-items'}>
  //           <div id={'boat-to-near-shore'}>
  //             <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate'} 
  //               onClick={() => moveBoatToNearShore('corn+chickenOnFarShore')}>
  //               <div className={'position-relative farmer-position'}>
  //                 <Farmer />
  //               </div>
  //               <div className={'position-absolute'}>
  //                 <Boat />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div id={'corn'} className={'position-absolute col-10 justify-content-end-custom z-front'}
  //           onClick={() => moveBoatToNearShore('corn-far-shore')}>
  //           <Corn />
  //         </div>
  //         <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}
  //           onClick={() => moveBoatToNearShore('chicken-far-shore')}>
  //           <Chicken />
  //         </div>
  //       </div>
  //   </main>
  //   )
  // }  else if (itemOnFarShore === 'fox') {
  //   return (
  //     <main className={'landscape main-height'}>
  //       <Constraints />
  //     <div id={'all-elements'}className={'d-flex justify-content-start align-items-end'}>
  //       <div id={'fox'} className={'hidden'}>
  //         <Fox />
  //       </div>
  //       <div id={'chicken'} className={'hidden'} >
  //         <Chicken />
  //       </div>
  //       <div >
  //       <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
  //         <Corn />
  //       </div>
  //       <div className={'float z-front-3 rotate far-position-2-items'}>
  //           <div id={'boat-to-near-shore'}>
  //             <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate'} 
  //               onClick={() => moveBoatToNearShore('chicken')}>
  //               <div className={'position-relative farmer-position'}>
  //                 <Farmer />
  //               </div>
  //               <div className={'position-absolute'}>
  //                 <Boat />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div id={'corn'} className={'position-absolute col-10 justify-content-end-custom z-front'}>
  //           <Fox/>
  //         </div>
  //         <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}>
  //           <Chicken />
  //         </div>
  //       </div>
  //   </main>
  //   )
  // } else if (itemOnFarShore === 'corn+chickenOnFarShore') {
  //     return (
  //       <DeadCornFarShore />
  //   ) 
  // } else if (itemOnFarShore === 'fox+chicken') {
  //     return (
  //       <DeadChickenFarShore />
  //   ) 
  // } else if (animationEnd === 'boat landed on far shore') {
  //     return (
  //       <main className={'landscape main-height'}>
  //         <Constraints />
  //       <div id={'all-elements'} className={'d-flex justify-content-start align-items-end landscape col-12'}>
  //         <div id={'fox'}>
  //           <Fox />
  //         </div>
  //         <div id={'chicken'} className={'hidden'} >
  //           <Chicken />
  //         </div>
  //         <div id={'corn'}>
  //         <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
  //           <Corn />
  //         </div>
  //         <div className={'float z-front'}>
  //           <div id={'boat-to-near-shore'}>
  //             <div id={'boat'} className={'d-flex flex-column justify-content-end x-rotate far-shore-boat-position'} 
  //               onClick={() => moveBoatToNearShore('chicken')}>
  //               <div className={'position-relative farmer-position'}>
  //                 <Farmer />
  //               </div>
  //               <div className={'position-absolute'}>
  //                 <Boat />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className={'position-absolute col-11 d-flex justify-content-end'}>
  //           <Chicken />
  //         </div>
  //       </div>
  //     </main>
  //     )
  // } else if (clickedItem === 'fox+chicken') {
  //     return (
  //       <FoxInBoatChickenFarShore />
  //     )
  // } else if (clickedItem === 'chicken-far-shore') {
  //    return (
  //       <ChickenInBoatCornFarShore />
  //   ) 
  // } else {
  //     return (
  //       <ChickenInBoatEmptyFarShore />
  //     ) 
  //   }

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