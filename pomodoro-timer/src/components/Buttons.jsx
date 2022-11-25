import { VscDebugStart } from 'react-icons/vsc';
import { BsPause } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';
import { useState } from 'react';

const Buttons = () => {

    const [start, setStart] = useState(true);


    return (
        <div>
            <button
                className='btnStart'
                onClick={handleChange}>
                <VscDebugStart />
            </button>
            <button className='btnStart'>
                <BsPause />
            </button>
            <button className='btnReset'>
                <BiReset />
            </button>
        </div >
    )
}

export default Buttons; 