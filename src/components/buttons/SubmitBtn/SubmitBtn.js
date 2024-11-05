import './submitBtn.scss';

function SubmitBtn({text, handlerClick}) {
    return (
        <button type="submit"
        className="submit__btn"
        onClick={(e) => {handlerClick(e)}}>
            {text}
        </button>
    )
}

export default SubmitBtn;