import { useMemo, useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import chicken from '../public/images/chicken.png'
import corn from '../public/images/corn.png'
import fox from '../public/images/fox.png'
import BoatAndFarmer from './components/boatAndFarmer'
import { RiddleDescription } from './components/riddleDescription'
import Particles from './components/particles'
import { NearShore } from './components/nearShore'
// import { FarShore } from './components/farShore'

export default function Home() {
  const [nearShoreScene, setNearShoreScene] = useState([
    {
      id: '0',
      img: chicken,
      alt: 'chicken'
    },
    {
      id: '1',
      img: corn,
      alt: 'corn'
    },
    {
      id: '2',
      img: fox,
      alt: 'fox'
    }
  ])
  const [boatNearShore, boatNewShore] = useState([])
    // boatFarShore: [],
    // farShore: []

  

  useEffect(() => {
    snow()
  }, []);
  
  const value = 0;
  const snow = useCallback(() => {Particles()}, [value]);

  return (
    <main className={'landscape main-height'}> 
      <canvas className={'position-absolute'} id="cvs"></canvas>
      <RiddleDescription />
      <div className={'d-flex justify-content-between'}>
        <div className={'d-flex justify-content-start align-items-end'}>
          <NearShore 
            nearShoreScene={nearShoreScene}
            setNearShoreScene={setNearShoreScene}
          />
          <BoatAndFarmer />
        </div>
        {/* <FarShore /> */}
      </div>
    </main>
  )
}