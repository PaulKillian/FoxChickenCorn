import { Constraints } from './constraints'
import { Fox, Chicken, Corn, Boat, Farmer } from './nearShore'

export const ChickenInBoatCornFarShore = () => {
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
            <div className={'float'}>
                <div id={'boat-to-near-shore'}>
                <div id={'boat'} className={'d-flex flex-column justify-content-end rotate'} 
                    onClick={() => moveBoatToNearShore('chicken')}>
                    <div className={'position-relative farmer-position'}>
                    <Farmer />
                    </div>
                    <div id={'chickenInBoat'} className={'position-absolute'}>
                        <Chicken/>
                    </div>
                    <div className={'position-absolute'}>
                    <Boat />
                    </div>
                </div>
                </div>
            </div>
            <div className={'position-absolute col-10 d-flex justify-content-end'}>
                <Corn />
            </div>
            </div>
        </main>
    )
}