import { Constraints } from './constraints'
import { Fox, Chicken, Corn, Boat, Farmer } from './nearShore'
import Image from 'next/image'
import poof from '../../public/images/poof.png'

export const DeadCorn = () => {
    return (
        <main className={'landscape main-height'}>
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
            <div className={'float'}>
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
            </div>
        </div>
    </main>
    )
}

export const DeadChicken = () => {
    return (
        <main className={'landscape main-height'}>

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
            <div className={'float'}>
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
            </div>
            </div>
        </main>
    )
}

export const DeadCornFarShore = () => {
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
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />
        </div>
        <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}>
          <Chicken />
        </div>
      </div>
  </main>
  )
}

export const DeadChickenFarShore = () => {
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
      <div className={'float z-front-3 rotate2 far-position-2-items'}>
          <div id={'boat-to-near-shore'}>
            <div id={'boat'} className={'d-flex flex-column justify-content-end'} 
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
          <Fox />
        </div>
        <div id={'chicken'} className={'position-absolute col-11 justify-content-end-custom'}>
          <Image className={'grow'}
              src={poof} 
              alt="Poof" 
              width={200}
              height={200}
            />
        </div>
      </div>
  </main>
  )
}