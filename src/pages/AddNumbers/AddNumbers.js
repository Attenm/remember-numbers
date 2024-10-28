import './addNumbers.scss';
import NumberSection from '../../NumberSection/NumberSection.js'
import AddSectionBtn from '../../components/buttons/AddSectionBtn/AddSectionBtn.js'
import { useState } from 'react';

function AddNumbers() {
    const [numberSectionList, setNumberSectionList] = useState([]);

    return (
        <div className="add-numbers__wrapper">
            <form className='add-numbers__form'>
                <div className='number-section__wrapper'>
                    <NumberSection/>
                    {numberSectionList.map((numberSection, index)=> {
                            return (<NumberSection key={index}/>)
                    })}
                    <AddSectionBtn {...{numberSectionList, setNumberSectionList}} />
                </div>
            </form>
        </div>
    )
}

export default AddNumbers;