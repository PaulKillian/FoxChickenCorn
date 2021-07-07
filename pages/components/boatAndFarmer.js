import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

function BoatAndFarmer(props) {
    console.log(props.placeItemInBoat)
    console.log(props.clickedItem)
    if (props.clickedItem) {
        return (
            <div className={'boat-animation'}> 
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
                    {props.placeItemInBoat.map(item => {
                        item.alt === props.clickedItem.alt
                            return (
                                <Image className={props.clickedItem === item.alt ? 'hidden' : null}
                                    onClick={() => props.checkItem(item.id)}
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