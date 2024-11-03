import './addNumbersPage.scss';
import NumberSection from '../../components/NumberSection/NumberSection.js';
import AddSectionBtn from '../../components/buttons/AddSectionBtn/AddSectionBtn.js';
import { useState } from 'react';
import SubmitBtn from '../../components/buttons/SubmitBtn/SubmitBtn.js';

function AddNumbersPage() {
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

export default AddNumbersPage;