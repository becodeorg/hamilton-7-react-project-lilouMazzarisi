import { VscDebugStart } from 'react-icons/vsc';
import { BsPause } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

const Buttons = ({ start, toggle, reset }) => {

    return (
        <div className='flex items-baseline justify-center gap-2'>
            <button
                className='btnStart w-14 h-14 p-0 pl-3 text-3xl'
                onClick={toggle}>
                {start ? <BsPause /> : <VscDebugStart />}
            </button>
            <button
                className='btnReset basicBtn'
                onClick={reset}>
                <BiReset />
            </button>
        </div >
    )
}

export default Buttons; 