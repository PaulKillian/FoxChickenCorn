import boat from '../../public/images/boat.png'
import farmer from '../../public/images/farmer.png'
import Image from 'next/image'

function BoatAndFarmer(props) {

    export const Item = () => {
        return (
          <Image className={'shadow'}
              src={chicken} 
              alt="Chicken" 
              width={130}
              height={150}
          />
        )
      }

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