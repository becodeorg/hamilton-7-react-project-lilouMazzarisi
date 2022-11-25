import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const Timer = ({ timer, breakTime, timeFormat }) => {

    return (
        <div>
            <div className='timer'>
                <span>{timeFormat(timer)}</span>
            </div>
            <button
                className='btnMinus'
            >
                <BiMinus />
            </button>
            <button className='btnPlus'>
                <BsPlus />
            </button>
            {/* Break  */}
            <div className='break'>
                <span>{timeFormat(breakTime)}</span>
            </div>
        </div>
    )
}

export default Timer; 