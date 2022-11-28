import { BiMinus } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';

const Timer = ({ timer, add, substract }) => {
    const timeFormat = (time) => {
        let min = Math.floor(time / 60);
        let sec = time % 60;
        console.log(min + ":" + sec);
        return (
            (min < 10 ? "0" + min : min) // displays the minutes like 00 or 01 or 10 
            + ":" +
            (sec < 10 ? "0" + sec : sec) // displays the second like 00 or 01 or 10 
        )
    }
    return (
        <div>
            <div className='timer'>
                <span>
                    {timeFormat(timer)}
                </span>
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