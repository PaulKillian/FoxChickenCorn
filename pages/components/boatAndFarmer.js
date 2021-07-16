import { useEffect } from 'react'
import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

function BoatAndFarmer(props) {
    if (props.clickedItem) {
        return (
            <div id={'boat-container'} onClick={
                    props.boatIsOnNearShore
                    ? () => props.sendBoatToFarShore()
                    : () => props.sendBoatToNearShore()
                }
                className={props.boatIsOnFarShore && 'boat-animation'}>
                <div id={'boat'} className={'d-flex flex-column justify-content-end float'}
                className={
                        props.boatIsOnFarShore
                        ? 'd-flex flex-column justify-content-end float far-shore-rotate' 
                        : 'd-flex flex-column justify-content-end float'
                    }> 
                    <div className={'position-relative farmer-position'}>
                        <Image className={'shadow'}
                        src={farmer} 
                        alt="The farmer" 
                        width={200}
                        height={280}
                        />
                    </div>
                    <div className={
                        props.placeItemInBoat < 1
                        ? 'hidden position-absolute'
                        : 'position-absolute'
                    }> 
                    {props.placeItemInBoat.map(item => {
                        item.alt === props.clickedItem.alt
                            return (
                                <Image
                                    key={item.id}
                                    src={item.img}
                                    alt={item.alt} 
                                    width={130}
                                    height={150}
                                />
                            )
                        })}
                    </div>
                    <div className={'position-absolute'}>
                        <Image className={'shadow'} 
                        src={boat} 
                        alt="The row boat" 
                        width={200}
                        height={50}
                        />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id={'boat'} className={'d-flex flex-column justify-content-end float'}>
                <div className={'position-relative farmer-position'}>
                    <Image className={'shadow'}
                    src={farmer} 
                    alt="The farmer" 
                    width={200}
                    height={280}
                    />
                </div>
                <div className={'position-absolute'}>
                    <Image className={'shadow'} 
                    src={boat} 
                    alt="The row boat" 
                    width={200}
                    height={50}
                    />
                </div>
            </div>
        )
    }
}

export default BoatAndFarmer;