import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const Timer = ({ timer, add, substract, timeFormat }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 relative p-8'>
            <h2>Worktime</h2>
            <div className='timer border-4 rounded-full w-48 h-48 flex items-center justify-center text-violet-300 shadow-inner shadow-black'>
                <span className='text-5xl '>
                    {timeFormat(timer)}
                </span>
            </div>
            <div className='flex flex-col justify-between absolute h-[30%] top-[130px] left-[205px] '>
                <button
                    className='btnPlus basicBtn'
                    onClick={add}>
                    <BsPlus />
                </button>
                <button
                    className='btnMinus basicBtn'
                    onClick={substract}
                >
                    <BiMinus />
                </button>
            </div>
        </div>
    )
}

export default Timer; 