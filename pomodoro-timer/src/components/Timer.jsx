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
        <div className='flex flex-col items-center justify-center gap-5 relative'>

            <div className='timer border-8 rounded-full w-40 h-40 flex items-center justify-center'>
                <span className='text-4xl '>
                    {timeFormat(timer)}
                </span>
            </div>
            <div className='flex justify-between absolute w-3/5 top-36'>
                <button
                    className='btnMinus basicBtn '
                    onClick={substract}
                >
                    <BiMinus />
                </button>
                <button
                    className='btnPlus basicBtn'
                    onClick={add}>
                    <BsPlus />
                </button>
            </div>
        </div>
    )
}

export default Timer; 