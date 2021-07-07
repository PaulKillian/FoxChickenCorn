import { Constraints } from './constraints'
import { Fox, Chicken, Corn, Boat, Farmer } from './nearShore'

export const CornInBoatChickenFarShore = () => {
    return (
        <main className={'landscape main-height'}>
            <canvas className={'position-absolute'} id="cvs"></canvas>
            <Constraints />
            <div className={'d-flex justify-content-start align-items-end landscape'}>
                <div id={'fox'}>
                    <Fox />
                </div>
                <div id={'chicken'} className={'hidden'} >
                    <Chicken />
                </div>
                <div id={'corn'} className={'hidden'}>
                <div id={'tooltip'} role="tooltip" className={'bg-white p-2'}>I don't want to die!</div>
                    <Corn />
                </div>
                <div className={'float'}>
                    <div id={'boat'} className={'d-flex flex-column justify-content-end boat-animation'}>
                        <div className={'position-relative farmer-position'}>
                            <Farmer />
                        </div>
                        <div id={'chickenInBoat'} className={'position-absolute'}>
                            <Corn/>
                        </div>
                        <div className={'position-absolute'}>
                            <Boat />
                        </div>
                    </div>
                </div>
                <div className={'position-absolute col-11 d-flex justify-content-end'} >
                    <Chicken />
                </div>
            </div>
        </main>
    ) 
}