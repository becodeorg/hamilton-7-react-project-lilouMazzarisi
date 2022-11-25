import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const Timer = ({ timer, timeFormat, add, substract }) => {

    return (
        <div>
            <div className='timer'>
                <span>{timeFormat(timer)}</span>
            </div>
            <button
                className='btnMinus'
                onClick={substract}
            >
                <BiMinus />
            </button>
            <button
                className='btnPlus'
                onClick={add}>
                <BsPlus />
            </button>

        </div>
    )
}

export default Timer; 