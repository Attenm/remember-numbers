import './addNumbersPage.scss';
import NumberSection from '../../components/NumberSection/NumberSection.js';
import AddSectionBtn from '../../components/buttons/PlusButton/PlusButton.js';
import { useState } from 'react';
import SubmitBtn from '../../components/buttons/SubmitBtn/SubmitBtn.js';

function AddContactPage() {
    const [numberSectionList, setNumberSectionList] = useState([]);

    return (
        <div className="add-numbers__wrapper">
            <form className='number-section__form'>
                    <NumberSection/>
                    {numberSectionList.map((numberSection, index)=> {
                            return (<NumberSection key={index}/>)
                    })}
                    <AddSectionBtn {...{numberSectionList, setNumberSectionList}} />
                    <SubmitBtn text={'Add'}/>
            </form>
        </div>
    )
}

export default AddContactPage;