const Modal = ({ timer, show, setShow, reset }) => {
    return (
        <div>
            <h3>Break Time!</h3>
            <button
                onClick={() => { setShow(show) }}
            >
                Close
            </button>
            <button
                onClick={() => { setShow(show); reset(timer) }}
            >New Timer</button>
        </div >
    )

}

export default Modal; 