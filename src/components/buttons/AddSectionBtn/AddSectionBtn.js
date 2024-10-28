import './addSectionBtn.scss'

function AddSectionBtn({numberSectionList, setNumberSectionList}) {

    function addSectionIfClicked(e) {
        e.preventDefault();
        setNumberSectionList([...numberSectionList, '']);
    }

    return (
        <button className='add-section__btn' onClick={(e) => addSectionIfClicked(e)}>+</button>
    )
}

export default AddSectionBtn;