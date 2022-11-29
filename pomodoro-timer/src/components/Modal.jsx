import { VscClose } from 'react-icons/vsc';
import { VscDebugStart } from 'react-icons/vsc';
import { BsPause } from 'react-icons/bs';
import { BiReset } from 'react-icons/bi';

const Modal = ({ setShow, show, timeFormat, breakTimer, modalToggle, startBreak, resetModal, reset }) => {
    return (
        <div className="bg-zinc-900 absolute top-[100px] h-[345px] w-64 rounded-xl flex flex-col p-6 justify-between" >
            <button className="basicBtn self-end"
                onClick={() => { setShow(!show); reset() }}
            >
                <VscClose />
            </button>
            <div className='pb-5'>
                <h3 className='text-violet-300 text-xl font-semibold'>Time for a break!</h3>
                <p className='italic text-xs'>Press Play to start your break.</p>
            </div>
            <div>
                <div className='flex gap-5 items-start justify-center pb-10'>
                    <span className='text-5xl text-violet-300 '>
                        {timeFormat(breakTimer)}
                    </span>
                    <div className='flex gap-1 items-baseline justify-between'>
                        <button
                            className='btnReset drop-shadow-lg w-7 h-7 p-0 pl-2 text-xs text-violet-500 rounded-full focus:outline-0 border-0 focus:shadow-inner-xl'
                            onClick={resetModal}>
                            <BiReset />
                        </button>
                        <button
                            className='btnStart drop-shadow-lg bg-violet-500/70 w-12 h-12 p-0 pl-3 text-2xl text-zinc-800 rounded-full focus:outline-0 border-0 focus:shadow-gray-800/50'
                            onClick={modalToggle}>
                            {startBreak ? <BsPause /> : <VscDebugStart />}
                        </button>

                    </div>
                </div>
                <div className='flex gap-4 items-center justify-end pb-5'>

                    <button
                        className='btnReset drop-shadow-lg text-violet-500 rounded-full focus:outline-0 border-0 focus:shadow-inner-xl'
                        onClick={() => { setShow(!show); reset() }}
                    >Back to work</button>

                </div>
            </div>
        </div >
    )

}

export default Modal; 