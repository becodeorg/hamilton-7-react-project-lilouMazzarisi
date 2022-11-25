import { VscDebugStart } from 'react-icons/vsc';
import { BsPause } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

const Buttons = ({ start, toggle, reset }) => {

    return (
        <div>
            <button
                className='btnStart'
                onClick={toggle}>
                {start ? <BsPause /> : <VscDebugStart />}
            </button>
            <button
                className='btnReset'
                onClick={reset}>
                <BiReset />
            </button>
        </div >
    )
}

export default Buttons; 