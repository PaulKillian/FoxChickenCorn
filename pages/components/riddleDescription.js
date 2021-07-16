import { useEffect, useState, } from 'react/cjs/react.development';

export const RiddleDescription = (props) => {
    const [refresh, setrefresh] = useState(false);
    
    useEffect(() => {
        refresh && window.location.reload();
    })

    return (
        <div className={'py-3 d-flex justify-content-center mb-3'}>
            <canvas className={'position-absolute'} id="cvs"></canvas>
            <div className={'glass col-6'}>
                <h1 className={'text-center text-white'}>THE FOX, CHICKEN AND CORN</h1>
                <h5 className={'p-3 text-white'}>
                    A farmer has to get a fox, a chicken, and GMO corn across a river.<br></br>
                    He has a rowboat, and it can only carry him and one other thing.<br></br><br></br>
                    
                    If the fox and the chicken are left together, the fox will eat the chicken.<br></br>
                    If the chicken and the corn are left together, the chicken will eat the corn.<br></br><br></br>

                    How does the farmer do it?
                </h5>
                <button className={'bt-color m-3 mb-4 p-2'} 
                    onClick={() => setrefresh(true)}>Try Again</button>
                {/* <button>{snow()}</button> */}
            </div>
        </div>
    )
}