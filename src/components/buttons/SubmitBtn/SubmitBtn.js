import './submitBtn.scss';

function SubmitBtn({text}) {
    function submitIfPressed(e){
        e.preventDefault();
    }
    return (
        <button type="submit"
        className="submit__btn"
        onClick={(e) => {submitIfPressed(e)}}>
            {text}
        </button>
    )
}

export default SubmitBtn;