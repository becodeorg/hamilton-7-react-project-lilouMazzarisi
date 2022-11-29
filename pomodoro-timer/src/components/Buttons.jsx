import { VscDebugStart } from 'react-icons/vsc';
import { BsPause } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

const Buttons = ({ start, toggle, reset }) => {

    return (
        <div className='flex items-baseline justify-center'>
            <button
                className='btnStart bg-violet-500/70 w-14 h-14 p-0 pl-4 text-2xl text-zinc-800 rounded-full mr-2 focus:outline-0 border-0 focus:shadow-gray-800/50 focus:shadow-inner '
                onClick={toggle}>
                {start ? <BsPause /> : <VscDebugStart />}
            </button>
            <button
                className='btnReset w-9 h-9 p-0 pl-2 text-xl text-violet-500 rounded-full focus:outline-0 border-0 focus:shadow-inner-xl'
                onClick={reset}>
                <BiReset />
            </button>
        </div >
    )
}

export default Buttons; 