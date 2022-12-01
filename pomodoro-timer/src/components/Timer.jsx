import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const Timer = ({ timer, add, substract, timeFormat }) => {

    return (
        <div className='flex flex-col items-center justify-center gap-5 relative p-8'>
            <h2>Worktime</h2>
            <div className='timer'>
                <div className='circle border-4 border-violet-500 rounded-full w-48 h-48 flex text-violet-300 shadow-inner items-center justify-center absolute'>
                    <span className='text-5xl'>
                        {timeFormat(timer)}
                    </span>
                </div>
                <div className='circle border-4 border-orange-500 rounded-full w-48 h-48 relative>'>
                </div>
            </div>
            <div className='flex flex-col justify-between absolute h-[30%] top-[130px] left-[205px] '>
                <button
                    className='btnPlus basicBtn '
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