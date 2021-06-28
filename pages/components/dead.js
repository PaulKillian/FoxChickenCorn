import { Constraints } from './constraints'
import { Fox, Chicken, Corn, Boat, Farmer } from './allItems'
import Image from 'next/image'
import poof from '../../public/images/poof.png'

export const DeadCorn = () => {
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