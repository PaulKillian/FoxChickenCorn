import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

const EmptyBoat = () => {
    const moveBoat = () => {
        const boatImg = document.getElementById('boat')
        boatImg.classList.add('boat-animation')
    }

    return (
        <div id={'boat'} className={'d-flex flex-column justify-content-end float'} onClick={moveBoat}>
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

export default EmptyBoat;