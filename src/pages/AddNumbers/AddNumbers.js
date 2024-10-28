import './addNumbers.scss';
import NumberSection from '../../NumberSection/NumberSection.js'
import AddSectionBtn from '../../components/buttons/AddSectionBtn/AddSectionBtn.js'

function AddNumbers() {
    
    return (
        <div className="add-numbers__wrapper">
            <form className='add-numbers__form'>
                <div className='number-section__wrapper'>
                    <NumberSection/>
                    <AddSectionBtn/>
                </div>
            </form>
        </div>
    )
}

export default AddNumbers;